// @flow

const messages = {
  isRequired: 'Required',
  isEmail: 'Should be valid email address',
  isUrl: 'Should be valid URL',
  isTrue: 'Should be checked',
  isNumber: 'Should be a number',
  isRequiredArray: 'Should have at least one value',
};

const getDefaultRuleMessage = (ruleName: string) =>
  messages[ruleName] || 'Invalid';

export default getDefaultRuleMessage;
