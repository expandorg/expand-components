// @flow

declare type Module = {
  name: string,
  type: string,
  modules?: Array<Module>,
  [key: string]: Module | Array<Module> | string | Object | number | boolean,
};

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
      break;
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
