// @flow
import template from '../../../common/template';
import getVariablesMap from './getVariablesMap';

const overrideProperty = (
  value: any,
  raw: Map<string, any>,
  substitutions: Map<string, any>
): any => {
  if (Array.isArray(value)) {
    return value.map(item => overrideProperty(item, raw, substitutions));
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
      return template(value, raw);
    }
    default:
      break;
  }
  return value;
};

const applyVariables = (module: Module, variables: Object): Module => {
  const raw = getVariablesMap(variables);
  const subst = getVariablesMap(variables, k => `$(${k})`);

  const { name, type, ...rest } = module;
  return Reflect.ownKeys(rest).reduce(
    (mod, fieldName) => {
      mod[fieldName] = overrideProperty(module[fieldName], raw, subst); // eslint-disable-line
      return mod;
    },
    { name, type }
  );
};

export default applyVariables;
