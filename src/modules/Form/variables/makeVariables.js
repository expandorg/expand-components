// @flow

const makeVariables = (vars: Object): Map<string, any> =>
  new Map(
    Reflect.ownKeys(vars).reduce(
      (all, key) => all.concat([[key, vars[key]], [`$(${key})`, vars[key]]]),
      []
    )
  );

export default makeVariables;
