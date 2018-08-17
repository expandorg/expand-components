// @flow
import ModuleType from '../../../src/modules/Module/ModuleType';

const validateModule = (module: Object) => {
  if (typeof module !== 'object') {
    throw new Error('module should be an Object');
  }
  const { type, name } = module;

  if (!type) {
    throw new Error('type is required property for module');
  }

  if (!name) {
    throw new Error('name is required property for module');
  }
};

export const compileForm = (source: string) => {
  const { modules } = JSON.parse(source);
  if (!modules || !Array.isArray(modules)) {
    throw new Error('modules (Arra<Module>) is required');
  }
  modules.forEach(module => validateModule(module));
  return {
    modules,
  };
};

const moduleFactories = {
  [ModuleType.text]: (params: Object) => ({
    ...params,
    placeholder: 'type some text',
  }),
  [ModuleType.number]: (params: Object) => ({
    ...params,
    placeholder: '0123',
  }),
  [ModuleType.email]: (params: Object) => ({
    ...params,
    placeholder: 'enter you email',
  }),
  [ModuleType.password]: (params: Object) => ({
    ...params,
    placeholder: 'enter your password',
  }),
  [ModuleType.submit]: (params: Object) => ({
    ...params,
    caption: 'Submit',
  }),
  [ModuleType.select]: (params: Object) => ({
    ...params,
    options: [
      { id: 1, caption: 'Option 1' },
      { id: 2, caption: 'Option 2' },
      { id: 3, caption: 'Option 2' },
      { id: 4, caption: 'Option 4' },
    ],
  }),
  [ModuleType.multiselect]: (params: Object) => ({
    ...params,
    options: [
      { id: 1, caption: 'Option 1' },
      { id: 2, caption: 'Option 2' },
      { id: 3, caption: 'Option 2' },
      { id: 4, caption: 'Option 4' },
    ],
  }),
  [ModuleType.checkbox]: (params: Object) => ({
    ...params,
    label: 'Checkbox label',
  }),
  [ModuleType.title]: (params: Object) => ({
    ...params,
    title: 'some title',
  }),
  [ModuleType.paragraph]: (params: Object) => ({
    ...params,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }),
  [ModuleType.article]: (params: Object) => ({
    ...params,
    title: 'article title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }),
  [ModuleType.video]: (params: Object) => ({
    ...params,
    src: 'http://media.gettyimages.com/videos/cap-video-id896606100',
  }),
  [ModuleType.image]: (params: Object) => ({
    ...params,
    src: 'https://portal.gems.org/images/complete-tasks.png',
  }),
  [ModuleType.description]: (params: Object) => ({
    ...params,
    content:
      'Write a trivia question with three multiple-choice answers. One answer should be correct and fact-checked, and two answers should be incorrect',
  }),
  [ModuleType.question]: (params: Object) => ({
    ...params,
    title: 'question title',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  }),
  [ModuleType.instructions]: (params: Object) => ({
    ...params,
    dialogs: [
      {
        action: 'See instructions',
        title: 'Instructions',
        content: 'Lorem ipsum dolor sit amet, consectetur',
      },
      {
        action: 'See Rules',
        title: 'Rules',
        content: 'Lorem ipsum dolor sit amet, consectetur',
      },
    ],
  }),
  [ModuleType.agreement]: (params: Object) => ({
    ...params,
    button: 'Rules',
    label: 'You must agree with rules',
    headline: 'question title',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  }),
};

export const appendModule = (
  originalForm: Object,
  type: string,
  params: Object = {}
) => {
  if (!originalForm && !originalForm.modules) {
    throw new Error(`Form is corrupted`);
  }

  const moduleFactory = moduleFactories[type];
  if (!moduleFactory) {
    throw new Error(`Module ${type} is not supported`);
  }

  const module = moduleFactory({
    ...params,
    type,
    name: `${type}${originalForm.modules.length}`,
  });
  const form = {
    ...originalForm,
    modules: [...originalForm.modules, module],
  };
  const source = JSON.stringify(form, undefined, 2);
  return { form, source };
};
