// @flow
import template from '../../../common/template';
import type { Module } from '../types.flow';
import getVariablesMap from './getVariablesMap';

const overrideProperty = (
  value: any,
  raw: Map<string, any>,
  substitutions: Map<string, any>,
  defaultValue?: ?string = null
): any => {
  if (Array.isArray(value)) {
    return value.map((item) => overrideProperty(item, raw, substitutions));
  }
  switch (typeof value) {
    case 'object':
      return Reflect.ownKeys(value).reduce((result, fieldName) => {
        result[fieldName] = overrideProperty(value[fieldName], raw, substitutions); // eslint-disable-line
        return result;
      }, {});
    case 'string': {
      if (substitutions.has(value)) {
        return substitutions.get(value);
      }
      return template(value, raw, defaultValue);
    }
    default:
      break;
  }
  return value;
};

export type FilterProperty = (
  module: Object,
  propertyName: string,
  reserved?: Set<string>
) => boolean;

const reserveredProperties = new Set(['type', 'name', 'validation', 'logic']);

export const variablesPropertyFilter: FilterProperty = (
  module: Module,
  propertyName: string,
  reserved: Set<string> = reserveredProperties
) => !reserved.has(propertyName);

const applyVariables = (
  module: Module,
  variables: Object,
  filter: FilterProperty = variablesPropertyFilter
): Module => {
  const raw = getVariablesMap(variables);
  const subst = getVariablesMap(variables, (k) => `$(${k})`);

  return Reflect.ownKeys(module).reduce((mod, fieldName) => {
    mod[fieldName] = filter(mod, fieldName)
      ? overrideProperty(module[fieldName], raw, subst, '')
      : module[fieldName];

    return mod;
  }, {});
};

export default applyVariables;
