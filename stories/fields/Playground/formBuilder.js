// @flow
import FieldType from '../../../src/fields/Field/fieldType';

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

export const compileForm = (source: string) => {
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
};

const fieldFactories = {
  [FieldType.text]: (params: Object) => ({
    ...params,
    placeholder: 'text placeholder',
  }),
  [FieldType.email]: (params: Object) => ({
    ...params,
    placeholder: 'text placeholder',
  }),
  [FieldType.number]: (params: Object) => ({
    ...params,
    placeholder: 'number',
  }),
  [FieldType.article]: (params: Object) => ({
    ...params,
    title: 'article title',
    content: 'Article content',
  }),
};

export const appendField = (
  originalForm: Object,
  type: string,
  params: Object = {}
) => {
  if (!originalForm && !originalForm.fields) {
    throw new Error(`Form is corrupted`);
  }

  const fieldFactory = fieldFactories[type];
  if (!fieldFactory) {
    throw new Error(`Field ${type} is not supported`);
  }

  const field = fieldFactory({
    ...params,
    type,
    name: `${type}${originalForm.fields.length}`,
  });
  const form = {
    ...originalForm,
    fields: [...originalForm.fields, field],
  };
  const source = JSON.stringify(form, undefined, 2);
  return { form, source };
};
