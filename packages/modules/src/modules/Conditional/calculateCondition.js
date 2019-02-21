// @flow

// import template from '../../common/template';
import { getVariablesMap } from '../../form/model/variables';

const isFalseValue = (value: ?string) =>
  !value || value === '0' || value === 'false';

export const tokenize = (str: string): Array<string> => {
  const tree = str
    .split('||')
    .map(ors => ors.split('&&').map(exp => exp.trim()));
  return tree;
};

const replaceVariable = (value: stirng, variables: Map): string =>
  variables.has(value) ? variables.get(value) : value;

export const interpretExpression = (
  tree: Array<Array<string>>,
  variables: Map
): boolean => {
  const expressionValue = tree.reduce((orValue, andExpression) => {
    if (!andExpression.length) {
      return orValue;
    }

    return (
      orValue ||
      andExpression.reduce((andValue, expr) => {
        if (expr.startsWith('!')) {
          const replaced = replaceVariable(expr.substring(1).trim(), variables);
          return andValue && isFalseValue(replaced);
        }
        const replaced = replaceVariable(expr, variables);
        return andValue && !isFalseValue(replaced);
      }, true)
    );
  }, false);

  return expressionValue;
};

export const calculateCondition = (condition: ?string, variables: ?Object) => {
  if (!condition) {
    return false;
  }

  const nomralized = condition
    .toString()
    .toLocaleLowerCase()
    .trim();

  if (isFalseValue(nomralized)) {
    return false;
  }

  const tokens = tokenize(nomralized);

  const vars = getVariablesMap(variables || {}, k => `$(${k})`);

  return interpretExpression(tokens, vars);
};

export const getFormValues = (values: ?Object, names: Array<string>) =>
  names.reduce(
    (all, name) => {
      if (typeof all[name] === 'undefined') {
        all[name] = false;
      }
      return all;
    },
    { ...(values || {}) }
  );
