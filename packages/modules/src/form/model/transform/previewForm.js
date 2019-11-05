// @flow
import type { Form, Module } from '../types.flow';

import { dfsVisitor } from '../modules';
import {
  transformModule,
  checkboxTransform,
  dropdownTransform,
  imageTilesTransform,
  inputTransform,
  regionSelectTransform,
  regionMultiselectTransform,
  selectTransform,
  sliderTransform,
  tagVideoTranform,
  multipleTagVideoTranform,
  yesNoTransform,
} from './modules';

function flattenForm(form: Form): Array<Module> {
  const supported = new Set([
    'agreement',
    'checkbox',
    'dropdown',
    'imageTiles',
    'input',
    'regionSelect',
    'regionMultiselect',
    'select',
    'slider',
    'tagVideo',
    'multipleTagVideo',
    'yesno',
  ]);
  const result = [];
  dfsVisitor(form.modules, m => {
    if (supported.has(m.type)) {
      result.push(m);
    }
  });
  return result;
}

export default function previewForm(form: Form): Form {
  const previewModules = {
    checkbox: checkboxTransform,
    dropdown: dropdownTransform,
    imageTiles: imageTilesTransform,
    input: inputTransform,
    regionSelect: regionSelectTransform,
    regionMultiselect: regionMultiselectTransform,
    select: selectTransform,
    slider: sliderTransform,
    tagVideo: tagVideoTranform,
    multipleTagVideo: multipleTagVideoTranform,
    yesNo: yesNoTransform,
  };

  const modules = flattenForm(form)
    .map(module => transformModule(module, previewModules))
    .filter(Boolean);

  return {
    modules,
    autogenenrated: true,
  };
}
