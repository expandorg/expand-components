// @flow

const messages = {
  isRequired: 'Is required',
  isNotEmpty: 'Should not be empty',
  isEmail: 'Should be valid email address',
  isTrue: 'Should be checked',
  isNumber: 'Should be a number',
  isRequiredArray: 'Should have at least one value',
};

const getDefaultRuleMessage = (ruleName: string) =>
  messages[ruleName] || 'Invalid';

export default getDefaultRuleMessage;
