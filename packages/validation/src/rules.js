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
  isMinCharacterCount: (value: any, min: number) => {
    if (typeof value !== 'string') {
      return false;
    }
    return value.length >= min;
  },
  isMaxCharacterCount: (value: any, max: number) => {
    if (typeof value !== 'string') {
      return false;
    }
    return value.length <= max;
  },
  isGreater: (value: any, b: number) => {
    const v = +value;
    return v > b;
  },
  isGreaterOrEqual: (value: any, a: number) => {
    if (!rules.isNumber(value)) {
      return false;
    }
    return +value >= a;
  },
  isLess: (value: any, a: number) => {
    if (!rules.isNumber(value)) {
      return false;
    }
    return +value < a;
  },
  isLessOrEqual: (value: any, a: number) => {
    if (!rules.isNumber(value)) {
      return false;
    }
    return +value <= a;
  },
};

export default rules;
