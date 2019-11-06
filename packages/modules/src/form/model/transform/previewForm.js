// @flow
import type { Form, Module } from '../types.flow';

import { dfsVisitor } from '../modules';
import { transformModule } from './transformModule';

import { initialValueTransform } from './transforms';

const supported = new Set([
  'checkbox',
  'dropdown',
  'imageTiles',
  'input',
  'regionSelect',
  'regionMultiselect',
  'select',
  'multiselect',
  'slider',
  'tagVideo',
  'multipleTagVideo',
  'yesno',
]);

function flatForm(form: Form): Array<Module> {
  const result = [];
  dfsVisitor(form.modules, m => {
    if (supported.has(m.type)) {
      result.push(m);
    }
  });
  return result;
}

const transforms = {
  checkbox: initialValueTransform,
  dropdown: initialValueTransform,
  imageTiles: initialValueTransform,
  input: initialValueTransform,
  regionSelect: initialValueTransform,
  regionMultiselect: initialValueTransform,
  select: initialValueTransform,
  multiselect: initialValueTransform,
  slider: initialValueTransform,
  tagVideo: initialValueTransform,
  multipleTagVideo: initialValueTransform,
  yesno: initialValueTransform,
};

export default function previewForm(form: Form): Form {
  return {
    autogenenrated: true,
    modules: flatForm(form)
      .map(module => transformModule(module, transforms))
      .filter(Boolean),
  };
}
