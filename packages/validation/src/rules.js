// @flow
import isEmail from 'validator/lib/isEmail';
import isNumeric from 'validator/lib/isNumeric';

export const rules = {
  isRequired: (value: any) => typeof value !== 'undefined' && value !== '',
  isEmail: (value: any) => typeof value !== 'undefined' && isEmail(value),
  isTrue: (value: any) => value === true,
  isNumber: (value: any) =>
    typeof value !== 'undefined' && isNumeric(value.toString()),
  isRequiredArray: (value: any) => !!value && value.length > 0,
};

export default rules;
