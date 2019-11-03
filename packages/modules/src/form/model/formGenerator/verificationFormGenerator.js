// @flow
import type { Form } from '../types.flow';

import { getModulesMap, transformModule } from './generate';

export default function verificationFormGenerator(
  taskForm: Form,
  prev: Form = { modules: [] }
): Form {
  const existing = getModulesMap(prev.modules);

  const modules = taskForm.modules
    .map(module => transformModule(module, existing))
    .filter(Boolean);

  return {
    modules,
    autogenenrated: true,
  };
}
