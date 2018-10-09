// @flow

import validateField from './validateField';

const validateForm = (form: Object, typeRules: Object): ?Object => {
  const formErrors = Reflect.ownKeys(typeRules).reduce((result, fieldName) => {
    const fieldRules = typeRules[fieldName];
    if (fieldRules) {
      if (!Array.isArray(fieldRules)) {
        const errors = validateForm(form[fieldName], fieldRules);
        if (errors) {
          return { ...result, ...errors };
        }
      } else {
        const message = validateField(form[fieldName], fieldRules);
        if (message) {
          return { ...result, [fieldName]: message };
        }
      }
    }
    return result;
  }, {});
  return Reflect.ownKeys(formErrors).length ? formErrors : null;
};

export default validateForm;
