// @flow
import type { Module } from '../types.flow';

export function initialValueTransform(module: Module) {
  return {
    ...module,
    readOnly: true,
    initial: `$(${module.name})`,
  };
}

function text(
  module: Module,
  contentFn: (answ: string) => string,
  style?: string = 'body'
): Module {
  return {
    name: module.name,
    type: 'text',
    align: 'left',
    color: 'black',
    style,
    content: contentFn(module.name),
  };
}

export function checkboxTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, (answVar) => `${module.label}: $(${answVar})`);
}

export function dropdownTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, (answVar) => `${module.label}: $(${answVar})`);
}

export function inputTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, (answVar) => `${module.placeholder}: $(${answVar})`);
}

export function wizardTransform(module: Module): Module {
  return {
    name: module.name,
    type: 'section',
  };
}
