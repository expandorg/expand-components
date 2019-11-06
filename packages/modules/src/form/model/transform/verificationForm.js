// @flow
import type { Form, Module } from '../types.flow';
import { dfsVisitor } from '../modules';

import {
  nullTransform,
  transformModule,
  type TransformDecorator,
  type TransformFn,
} from './transformModule';

import {
  checkboxTransform,
  dropdownTransform,
  imageTilesTransform,
  inputTransform,
  regionSelectTransform,
  regionMultiselectTransform,
  selectTransform,
  sliderTransform,
  submitTranform,
  tagVideoTranform,
  multipleTagVideoTranform,
  wizardTransform,
  yesNoTransform,
} from './transforms';

const transforms = {
  progress: nullTransform,
  agreement: nullTransform,
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

function getModulesMap(modules: Array<Module>): Map<string, Module> {
  const result = new Map();
  dfsVisitor(modules, m => {
    if (typeof m.__tfId === 'string') {
      result.set(m.__tfId, m);
    }
  });
  return result;
}

const createDecorator = (prev: Form = { modules: [] }): TransformDecorator => {
  const exisiting = getModulesMap(prev.modules);

  return (original: Module, tf: TransformFn): TransformFn => {
    return (module: Module): ?Module => {
      let result = exisiting.get(module.name);
      if (result) {
        return result;
      }

      result = tf(module);
      if (!result) {
        return result;
      }

      return {
        ...result,
        __tfId: original.name,
        name: `${original.name}-answ`,
      };
    };
  };
};

export default function verificationForm(
  taskForm: Form,
  prev: Form = { modules: [] }
): Form {
  const decorate = createDecorator(prev);

  const modules = taskForm.modules
    .map(m => transformModule(m, transforms, decorate))
    .filter(Boolean);

  return {
    modules,
    autogenenrated: true,
  };
}
