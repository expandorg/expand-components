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

function getModulesCache(modules: Array<Module>): Map<string, Module> {
  const result = new Map();
  dfsVisitor(modules, (m) => {
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

export const VERIFY_NAME = 'verification-response';
export const SUBMIT_NAME = 'submit-verification';

function appendScoreModules(
  modules: Array<Module>,
  cache: Map<string, Module>
): Array<Module> {
  const scoreModules = [
    cache.get(VERIFY_NAME) || {
      __tfId: VERIFY_NAME,
      name: VERIFY_NAME,
      type: 'verify',
      yesCaption: 'Correct',
      noCaption: 'Incorrect',
      validation: {
        isRequired: true,
      },
    },
    cache.get(SUBMIT_NAME) || {
      __tfId: SUBMIT_NAME,
      name: SUBMIT_NAME,
      type: 'submit',
      caption: 'Verify',
    },
  ];

  return [...modules, ...scoreModules];
}

export default function verificationForm(
  form: Form,
  prev?: Form = { modules: [] }
): Form {
  const cache = getModulesCache(prev.modules);
  const decorate = createDecorator(cache);

  const modules = form.modules
    .map((m) => transformModule(m, transforms, decorate))
    .filter(Boolean);

  return {
    autogenenrated: true,
    modules: appendScoreModules(modules, cache),
  };
}
