// @flow

import applyVariables, {
  variablesPropertyFilter,
  type FilterProperty,
} from './applyVariables';

const overrideFormVars = (
  form: Form,
  variables: Object,
  filterProp: FilterProperty = variablesPropertyFilter
): Form => {
  if (!variables) {
    return form;
  }
  return {
    ...form,
    modules: form.modules.map(module =>
      applyVariables(module, variables, filterProp)
    ),
  };
};

export default overrideFormVars;
