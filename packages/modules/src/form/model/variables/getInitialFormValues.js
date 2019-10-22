// @flow
import { type Form } from '../types.flow';

export default function getInitialFormValues(
  form: Form,
  prev?: ?Object = null
): ?Object {
  const values = form.modules.reduce((result, module) => {
    const hasInitial =
      module.initial !== null &&
      module.initial !== undefined &&
      module.initial !== '';
    if (!hasInitial) {
      return result;
    }
    return {
      ...result,
      [module.name]: module.initial,
    };
  }, {});

  if (!Reflect.ownKeys(values).length !== 0 && !prev) {
    return null;
  }
  return { ...(values || {}), ...(prev || {}) };
}
