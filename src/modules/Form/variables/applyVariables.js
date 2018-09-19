// @flow
import template from '../../../common/template';

const applyPropVariables = (
  property: any,
  variables: Map<string, any>
): any => {
  if (Array.isArray(property)) {
    return property.map(item => applyPropVariables(item, variables));
  }
  switch (typeof property) {
    case 'object':
      return Reflect.ownKeys(property).reduce((result, fieldName) => {
        result[fieldName] = applyPropVariables(property[fieldName], variables); // eslint-disable-line
        return result;
      }, {});
    case 'string': {
      if (variables.has(property)) {
        return variables.get(property);
      }
      return template(property, variables);
    }
    default:
      break;
  }
  return property;
};

const applyVariables = (
  module: Module,
  variables: Map<string, any>
): Module => {
  const { name, type } = module;
  return Reflect.ownKeys(module).reduce(
    (mod, fieldName) => {
      mod[fieldName] = applyPropVariables(module[fieldName], variables); // eslint-disable-line
      return mod;
    },
    { name, type }
  );
};

export default applyVariables;
