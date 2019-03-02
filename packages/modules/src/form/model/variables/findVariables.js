// @flow

export const getVariableName = (def: string) => def.slice(2, def.length - 1);

export const isVariable = (str: string): string =>
  str.startsWith('$(') && str.endsWith(')');

const findVariables = (text: string): Array<Object> => {
  const regex = /\$\(([^(^)]+)\)/g;
  const found = [];
  let result = regex.exec(text);
  while (result !== null) {
    const variable = result[0];
    found.push({
      variable,
      name: getVariableName(variable),
      start: result.index,
      end: regex.lastIndex,
    });
    result = regex.exec(text);
  }
  return found;
};

export { findVariables };
