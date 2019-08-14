// @flow

const validateField = (fieldValue: any, fieldRules: Array<any> | Object) => {
  const failedRule = fieldRules.find(rule => {
    const [fn, ...args] = rule;
    return !fn(fieldValue, ...args);
  });
  return failedRule ? failedRule[1] : null;
};

export default validateField;
