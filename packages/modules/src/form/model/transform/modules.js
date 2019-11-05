// @flow
import type { Module } from '../types.flow';

type TransformFn = (module: Module) => ?Module;

const verificaitonModuleProps = (module: Module) => ({
  name: `${module.name}-answ`,
  __tfId: module.name,
});

// eslint-disable-next-line no-unused-vars
export function emptyTransform(_: Module): ?Module {
  return null;
}

export function identityTransform(module: Module): Module {
  return { ...module, ...verificaitonModuleProps(module) };
}

export function transformModule(
  module: Module,
  transformMap: { [name: string]: TransformFn },
  prev?: Map<string, Module>
): ?Module {
  const { modules: nested, ...rest } = module;
  let result = !!prev && prev.get(rest.name);

  if (!result) {
    const transformFn = transformMap[module.type] || identityTransform;
    result = transformFn(rest);
  }

  if (!result) {
    return result;
  }

  if (!nested) {
    return result;
  }

  return {
    ...result,
    modules: nested
      .map(child => transformModule(child, transformMap, prev))
      .filter(Boolean),
  };
}

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

export function checkboxTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, answVar => `${module.label}: $(${answVar})`);
}

export function dropdownTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, answVar => `${module.label}: $(${answVar})`);
}

export function imageTilesTransform(module: Module): Module {
  return module;
}

export function inputTransform(module: Module): Module {
  // $FlowFixMe
  return text(module, answVar => `${module.placeholder}: $(${answVar})`);
}

export function regionSelectTransform(module: Module): Module {
  return module;
}

export function regionMultiselectTransform(module: Module): Module {
  return module;
}

export function selectTransform(module: Module): Module {
  return module;
}

export function sliderTransform(module: Module): Module {
  return module;
}

export function submitTranform(module: Module): Module {
  return module;
}

export function tagVideoTranform(module: Module): Module {
  return module;
}

export function multipleTagVideoTranform(module: Module): Module {
  return module;
}

export function wizardTransform(module: Module): Module {
  return module;
}

export function yesNoTransform(module: Module): Module {
  return module;
}
