// @flow

// import template from '../../common/template';
import { getVariablesMap } from '../../form/model/variables';

const isFalseValue = (value: ?string) =>
  !value || value === '0' || value === 'false';

export const tokenize = (str: string): Array<Array<string>> => {
  const tree = str
    .split('||')
    .map(ors => ors.split('&&').map(exp => exp.trim()));
  return tree;
};

const replaceVariable = (value: stirng, variables: Map): string =>
  variables.has(value) ? variables.get(value) : value;

const valueExpr = (expr: string, variables: Map): boolean => {
  if (expr.startsWith('!')) {
    const replaced = replaceVariable(expr.substring(1).trim(), variables);
    return isFalseValue(replaced);
  }
  const replaced = replaceVariable(expr, variables);
  return !isFalseValue(replaced);
};

const andExpr = (expression: Array<string>, variables: Map): boolean =>
  expression.reduce((value, expr) => value && valueExpr(expr, variables), true);

const orExpr = (expression: Array<Array<string>>, variables: Map): boolean =>
  expression.reduce(
    (or, expr) => (expr.length ? or || andExpr(expr, variables) : or),
    false
  );

export const interpretExpression = (
  tree: Array<Array<string>>,
  variables: Map
): boolean => orExpr(tree, variables);

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

  return interpretExpression(
    tokenize(nomralized),
    getVariablesMap(variables || {}, k => `$(${k})`)
  );
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
