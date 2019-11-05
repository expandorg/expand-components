// @flow
import type { Form, Module } from '../types.flow';

import { dfsVisitor } from '../modules';

import {
  transformModule,
  emptyTransform,
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
} from './modules';

function getModulesMap(modules: Array<Module>): Map<string, Module> {
  const result = new Map();
  dfsVisitor(modules, m => {
    if (typeof m.__tfId === 'string') {
      result.set(m.__tfId, m);
    }
  });
  return result;
}

export default function verificationForm(
  taskForm: Form,
  prev: Form = { modules: [] }
): Form {
  const existing = getModulesMap(prev.modules);
  const transformMap = {
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

  const modules = taskForm.modules
    .map(module => transformModule(module, transformMap, existing))
    .filter(Boolean);

  return {
    modules,
    autogenenrated: true,
  };
}
