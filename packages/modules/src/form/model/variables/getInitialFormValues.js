// @flow
import { type Form } from '../types.flow';

const getInitialFormValues = (form: Form): Form => {
  const initialValues = form.modules.reduce((result, module) => {
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
  return Reflect.ownKeys(initialValues).length !== 0 ? initialValues : null;
};

export default getInitialFormValues;
