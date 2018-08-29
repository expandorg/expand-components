// @flow

import makeVariables from './makeVariables';
import applyVariables from './applyVariables';

const overrideFormVars = (form: Form, variables: Object): Form => {
  if (!variables) {
    return form;
  }
  const vars = makeVariables(variables);
  return {
    ...form,
    modules: form.modules.map(module => applyVariables(module, vars)),
  };
};

export default overrideFormVars;
