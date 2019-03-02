// @flow

import { isVariable, getVariableName } from '../variables';

export type Op =
  | '>'
  | '<'
  | '>='
  | '<='
  | '=='
  | '!='
  | '==='
  | '!=='
  | '||'
  | '&&'
  | '+'
  | '-'
  | '*'
  | '/';

export const ops: Op = [
  '>',
  '<',
  '>=',
  '<=',
  '==',
  '!=',
  '===',
  '!==',
  '||',
  '&&',
  '+',
  '-',
  '*',
  '/',
];

export type Term = string | number | [Term, Op, Term];

export type Expression = Term | Array<Term>;

export type CompiledExpression = {
  js: string,
  variables: Array<string>,
};

export type Token = {
  type: 'variable' | 'value' | 'op',
  value: string | number | boolean,
};

const parseBool = (str: string): ?Token =>
  str === 'true' || str === 'false'
    ? { value: str === 'true', type: 'value' }
    : null;

export const parseToken = (token: string): Token => {
  const value = token.trim();

  if (!Number.isNaN(+value)) {
    return { value: +value, type: 'value' };
  }
  if (ops.includes(value)) {
    return { value, type: 'op' };
  }
  if (isVariable(value)) {
    return { value: getVariableName(value), type: 'variable' };
  }
  const bool = parseBool(token.toLocaleLowerCase());
  if (bool !== null) {
    return bool;
  }
  return { value: `"${token}"`, type: 'value' };
};

export const translate = (expression: Expression): CompiledExpression => {
  const variables = {};
  const js = expression
    .map(term => {
      if (Array.isArray(term)) {
        const { js: subprogram, variables: vars } = translate(term);

        Reflect.ownKeys(vars).forEach(k => {
          variables[k] = 0;
        });
        return `(${subprogram})`;
      }

      const token = parseToken(term);

      if (token.type === 'variable') {
        variables[token.value] = 0;
        return `vars["${token.value}"]`;
      }
      return token.value;
    })
    .join(' ');
  return { js, variables };
};

export const compile = (expression: Expression): Function => {
  const { js, variables: defaults } = translate(expression);

  // eslint-disable-next-line no-new-func
  const expr = new Function(`
    return function(vars) {
      return ${js}
    }
  `);

  const compiled = expr();

  return values => {
    const args = { ...defaults, ...values };
    return compiled(args);
  };
};
