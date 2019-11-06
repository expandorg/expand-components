// @flow

import applyVariables, { variablesPropertyFilter } from './applyVariables';
import type { FilterProperty } from './applyVariables';
import type { Form } from '../types.flow';

export default function overrideFormVars(
  form: Form,
  variables: Object,
  filterProp: FilterProperty = variablesPropertyFilter
): Form {
  if (!variables) {
    return form;
  }
  return {
    ...form,
    modules: form.modules.map(module =>
      applyVariables(module, variables, filterProp)
    ),
  };
}
