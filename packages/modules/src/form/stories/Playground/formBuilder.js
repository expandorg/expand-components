// @flow

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

export const appendModule = (
  originalForm: Object,
  moduleControl: Object,
  type: string,
  params: Object = {}
) => {
  if (!originalForm && !originalForm.modules) {
    throw new Error(`Form is corrupted`);
  }

  const module = {
    ...moduleControl.module.editor.defaults,
    ...params,
    type,
    name: `${moduleControl.module.type}${originalForm.modules.length}`,
  };

  const form = {
    ...originalForm,
    modules: [...originalForm.modules, module],
  };
  const source = JSON.stringify(form, undefined, 2);
  return { form, source };
};
