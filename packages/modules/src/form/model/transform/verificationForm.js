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
  initialValueTransform,
  checkboxTransform,
  dropdownTransform,
  inputTransform,
  wizardTransform,
} from './transforms';

const transforms = {
  progress: nullTransform,
  agreement: nullTransform,
  checkbox: checkboxTransform,
  dropdown: dropdownTransform,
  imageTiles: initialValueTransform,
  input: inputTransform,
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

function generatedModules(modules: Array<Module>): Map<string, Module> {
  const result = new Map();
  dfsVisitor(modules, m => {
    if (typeof m.__tfId === 'string') {
      result.set(m.__tfId, m);
    }
  });
  return result;
}

function createDecorator(exisiting: Map<string, Module>): TransformDecorator {
  return (original: Module, tf: TransformFn): TransformFn => {
    return (module: Module): ?Module => {
      const found = exisiting.get(module.name);
      if (found) {
        return found;
      }

      const transformed = tf(module);

      if (!transformed) {
        return transformed;
      }

      return {
        ...transformed,
        __tfId: original.name,
        name: `${original.name}-answ`,
      };
    };
  };
}

function addScoreModules(
  modules: Array<Module>,
  cache: Map<string, Module>
): Array<Module> {
  const yesno = cache.get('response') || {
    name: 'response',
    type: 'yesno',
    idType: 'none',
    yesCaption: 'Correct',
    noCaption: 'Incorrect',
    __tfId: 'response',
  };
  const submit = cache.get('submit') || {
    name: 'submit',
    type: 'submit',
    caption: 'Submit',
    __tfId: 'submit',
  };
  return [...modules, yesno, submit];
}

export default function verificationForm(
  form: Form,
  prev?: Form = { modules: [] }
): Form {
  const existing = generatedModules(prev.modules);
  const decorate = createDecorator(existing);

  const modules = form.modules
    .map(m => transformModule(m, transforms, decorate))
    .filter(Boolean);

  return {
    modules: addScoreModules(modules, existing),
    autogenenrated: true,
  };
}
