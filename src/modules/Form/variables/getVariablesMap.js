// @flow

const getVariablesMap = (
  vars: Object,
  keyTransform: Function = (key: string) => key
): Map<string, any> =>
  new Map(Reflect.ownKeys(vars).map(key => [keyTransform(key), vars[key]]));

export default getVariablesMap;
