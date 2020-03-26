// @flow
import type { Form } from '../types.flow';

import { transformModule, nullTransform } from './transformModule';

import { initialValueTransform, wizardTransform } from './transforms';

const transforms = {
  progress: nullTransform,
  agreement: nullTransform,
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
  submit: nullTransform,
  wizard: wizardTransform,
};

export default function previewForm(form: Form): Form {
  const modules = form.modules
    .map((module) => transformModule(module, transforms))
    .filter(Boolean);

  return {
    modules,
  };
}
