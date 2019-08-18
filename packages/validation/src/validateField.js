// @flow

const validateField = (fieldValue: any, fieldRules: Array<any> | Object) => {
  const failed = fieldRules.find(rule => {
    // eslint-disable-next-line no-unused-vars
    const [fn, message, ...args] = rule;
    return !fn(fieldValue, ...args);
  });
  return failed ? failed[1] : null;
};

export default validateField;
