// @flow
import type { Module } from '../types.flow';

export function initialValueTransform(module: Module) {
  return {
    ...module,
    readOnly: true,
    initial: `$(${module.name})`,
  };
}

const text = (
  module: Module,
  contentFn: (answ: string) => string,
  style?: string = 'body'
) => ({
  type: 'text',
  align: 'left',
  style,
  color: 'black',
  content: contentFn(module.name),
});

export function checkboxTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, answVar => `${module.label}: $(${answVar})`);
}

export function dropdownTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, answVar => `${module.label}: $(${answVar})`);
}

export function inputTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, answVar => `${module.placeholder}: $(${answVar})`);
}

export function wizardTransform(module: Module): Module {
  return module;
}
