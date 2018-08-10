// @flow
import isEmail from 'validator/lib/isEmail';

export const rules = {
  isRequired: (value: any) => typeof value !== 'undefined' && value !== '',
  isNotEmpty: (value: any) => typeof value !== 'undefined' && value !== '',
  isEmail: (value: any) => typeof value !== 'undefined' && isEmail(value),
};

export const ruleMessages = {
  isRequired: (field: string) => `${field} is required`,
  isNotEmpty: (field: string) => `${field} shuld not be empty`,
  isEmail: (field: string) => `${field} shuld be valid email address`,
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
