// @flow

import applyVariables from './applyVariables';

const overrideFormVars = (form: Form, variables: Object): Form => {
  if (!variables) {
    return form;
  }
  return {
    ...form,
    modules: form.modules.map(module => applyVariables(module, variables)),
  };
};

export default overrideFormVars;
