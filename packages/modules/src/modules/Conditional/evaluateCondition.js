// @flow
// import template from '../../common/template';

const isNullValue = (condition: ?string) =>
  !condition || condition === '0' || condition === 'false';

const evaluateCondition = (condition: ?string) => {
  if (isNullValue(condition)) {
    return false;
  }
  return true;
};

export default evaluateCondition;
