// @flow
import { type Form } from '../types.flow';
import { dfsVisitor } from '../modules';

export default function getInitialFormValues(
  form: Form,
  prev?: ?Object = null
): ?Object {
  const values = {};

  dfsVisitor(form.modules, (module) => {
    const hasInitial =
      module.initial !== null &&
      module.initial !== undefined &&
      module.initial !== '';

    if (hasInitial && !module.readOnly) {
      values[module.name] = module.initial;
    }
  });

  if (Reflect.ownKeys(values).length === 0 && !prev) {
    return null;
  }
  return { ...(values || {}), ...(prev || {}) };
}
