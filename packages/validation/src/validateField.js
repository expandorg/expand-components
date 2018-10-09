// @flow

const validateField = (fieldValue: any, fieldRules: Array<any> | Object) => {
  const failedRule = fieldRules.find(rule => !rule[0](fieldValue));
  return failedRule ? failedRule[1] : null;
};

export default validateField;
