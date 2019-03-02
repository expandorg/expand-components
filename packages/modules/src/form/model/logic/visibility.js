// @flow

import { type Module } from '../types.flow';
import { compile } from './compiler';

const visibleFn = () => true;

export const checkCondition = (
  expression: Function,
  success: boolean
): Function => (variables, values) => {
  const params = { ...(variables || {}), ...(values || {}) };

  const result = expression(params);
  return success ? !!result : !result;
};

export const compileVisibilityExpression = ({ logic }: Module): Function => {
  if (!logic || !logic.visibility) {
    return visibleFn;
  }
  try {
    const expression = compile(logic.visibility.condition);
    return checkCondition(expression, logic.visibility.success);
  } catch (e) {
    console.log('Error parsing expression: ', e);
    return visibleFn;
  }
};
