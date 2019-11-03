// @flow
import type { Module } from '../types.flow';

type TransformFn = (module: Module) => ?Module;

const verificaitonModuleProps = (module: Module) => ({
  name: `${module.name}-answ`,
  __tfId: module.name,
});

const text = (
  module: Module,
  contentFn: (answ: string) => string,
  style?: string = 'body'
) => ({
  ...verificaitonModuleProps(module),
  type: 'text',
  align: 'left',
  style,
  color: 'black',
  content: contentFn(module.name),
});

function checkboxTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, answVar => `${module.label}: $(${answVar})`);
}

function dropdownTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, answVar => `${module.label}: $(${answVar})`);
}

function imageTilesTransform(module: Module): Module {
  return module;
}

function inputTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, answVar => `${module.placeholder}: $(${answVar})`);
}

function regionSelectTransform(module: Module): Module {
  return module;
}

function regionMultiselectTransform(module: Module): Module {
  return module;
}

function selectTransform(module: Module): Module {
  return module;
}

function sliderTransform(module: Module): Module {
  return module;
}

function submitTranform(module: Module): Module {
  return module;
}

function tagVideoTranform(module: Module): Module {
  return module;
}

function multipleTagVideoTranform(module: Module): Module {
  return module;
}

function wizardTransform(module: Module): Module {
  return module;
}

function yesNoTransform(module: Module): Module {
  return module;
}

// eslint-disable-next-line no-unused-vars
function emptyTransform(_: Module): ?Module {
  return null;
}

export function identityTransform(module: Module): Module {
  return { ...module, ...verificaitonModuleProps(module) };
}

export const transformMap: { [name: string]: TransformFn } = {
  agreement: emptyTransform,
  checkbox: checkboxTransform,
  dropdown: dropdownTransform,
  imageTiles: imageTilesTransform,
  input: inputTransform,
  regionSelect: regionSelectTransform,
  regionMultiselect: regionMultiselectTransform,
  select: selectTransform,
  slider: sliderTransform,
  submit: submitTranform,
  tagVideo: tagVideoTranform,
  multipleTagVideo: multipleTagVideoTranform,
  wizard: wizardTransform,
  yesNo: yesNoTransform,
};
