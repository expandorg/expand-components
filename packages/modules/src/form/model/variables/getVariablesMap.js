// @flow

const getVariablesMap = (
  vars: ?Object,
  keyTransform: Function = (key: string) => key
): Map<string, any> => {
  if (!vars) {
    return new Map();
  }
  return new Map(
    // $FlowFixMe
    Reflect.ownKeys(vars).map((key) => [keyTransform(key), vars[key]])
  );
};

export default getVariablesMap;
