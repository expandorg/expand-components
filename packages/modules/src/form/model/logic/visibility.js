// @flow

import { type Module } from '../types.flow';
import { compile } from './compiler';

const visibleFn = () => true;

export const checkCondition = (
  condition: Function,
  show: boolean
): Function => (variables, values) => {
  const params = { ...(variables || {}), ...(values || {}) };

  const result = condition(params);
  return show ? !!result : !result;
};

export const hasVisibilityLogic = ({ logic }: Module): boolean =>
  !!logic && (!!logic.show || !!logic.hide);

export const compileVisibilityExpression = ({ logic }: Module): Function => {
  if (!logic || (!logic.show && !logic.hide)) {
    return visibleFn;
  }
  try {
    const fn = compile(logic.show ? logic.show : logic.hide);
    return checkCondition(fn, !!logic.show);
  } catch (e) {
    console.log('Error parsing expression: ', e);
    return visibleFn;
  }
};
