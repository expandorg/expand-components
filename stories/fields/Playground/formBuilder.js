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
  const { description, fields, submit } = JSON.parse(source);
  if (!fields || !Array.isArray(fields)) {
    throw new Error('fields (Array<Input>) is required');
  }
  fields.forEach(field => validateField(field));
  return {
    submit,
    description,
    fields,
  };
};

const fieldFactories = {
  [FieldType.text]: (params: Object) => ({
    ...params,
    placeholder: 'type some text',
  }),
  [FieldType.number]: (params: Object) => ({
    ...params,
    placeholder: '0123',
  }),
  [FieldType.email]: (params: Object) => ({
    ...params,
    placeholder: 'enter you email',
  }),
  [FieldType.password]: (params: Object) => ({
    ...params,
    placeholder: 'enter your password',
  }),
  [FieldType.submit]: (params: Object) => ({
    ...params,
    caption: 'Submit',
  }),
  [FieldType.select]: (params: Object) => ({
    ...params,
    options: [
      { id: 1, caption: 'Option 1' },
      { id: 2, caption: 'Option 2' },
      { id: 3, caption: 'Option 2' },
      { id: 4, caption: 'Option 4' },
    ],
  }),
  [FieldType.checkbox]: (params: Object) => ({
    ...params,
    label: 'Checkbox label',
  }),
  [FieldType.title]: (params: Object) => ({
    ...params,
    title: 'some title',
  }),
  [FieldType.paragraph]: (params: Object) => ({
    ...params,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }),
  [FieldType.article]: (params: Object) => ({
    ...params,
    title: 'article title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
