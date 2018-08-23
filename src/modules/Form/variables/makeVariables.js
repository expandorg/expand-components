// @flow

const makeVariables = (vars: Object): Map<string, any> =>
  new Map(Reflect.ownKeys(vars).map(key => [`$(${key})`, vars[key]]));

export default makeVariables;
