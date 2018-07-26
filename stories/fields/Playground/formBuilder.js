// @flow

const validateField = (field: Object) => {
  if (typeof field !== 'object') {
    throw new Error('field should be an Object');
  }
  const { type, name } = field;

  if (!type) {
    throw new Error('type is required property for field');
  }

  if (!name) {
    throw new Error('name is required property for field');
  }
};

export default function formBuilder(source: string) {
  const { description, fields } = JSON.parse(source);
  if (description && typeof description !== 'string') {
    throw new Error('description should be a string');
  }
  if (!fields || !Array.isArray(fields)) {
    throw new Error('fields (Array<Input>) is required');
  }
  fields.forEach(field => validateField(field));
  return {
    description: description || 'Empty description',
    fields,
  };
}
