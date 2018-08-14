// @flow
import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';

export const rules = {
  isRequired: (value: any) => typeof value !== 'undefined' && value !== '',
  isNotEmpty: (value: any) => typeof value !== 'undefined' && value !== '',
  isEmail: (value: any) => typeof value !== 'undefined' && isEmail(value),
  isTrue: (value: any) => value === true,
  isNumber: (value: any) =>
    typeof value !== 'undefined' && isNumeric(value.toString()),
};

export const validateField = (
  fieldValue: any,
  fieldRules: Array<any> | Object
) => {
  const failedRule = fieldRules.find(rule => !rule[0](fieldValue));
  return failedRule ? failedRule[1] : null;
};

export const validateForm = (form: Object, typeRules: Object): ?Object => {
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
