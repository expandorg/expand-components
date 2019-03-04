// @flow

const template = (
  str: string,
  variables: Map<string, any>,
  defaultValue: string
) =>
  str.replace(/\$\(([^()]+)\)/g, (full, word) => {
    if (variables.has(word)) {
      // $FlowFixMe
      return variables.get(word);
    }
    return defaultValue !== null && defaultValue !== undefined
      ? defaultValue
      : full;
  });

export default template;
