// @flow
import { rules } from '../../common/validation';

const defaultMessages = {
  isRequired: (field: string) => `${field} is required`,
  isNotEmpty: (field: string) => `${field} shuld not be empty`,
  isEmail: (field: string) => `${field} shuld be valid email address`,
};

const getRuleMessage = (
  ruleName: string,
  userMessage: ?string,
  propertyName: string
): string => {
  if (userMessage) {
    return userMessage;
  }
  const messageFactory = defaultMessages[ruleName];
  if (messageFactory) {
    return messageFactory(propertyName);
  }
  return `${propertyName} failed ${ruleName}`;
};

const normalizeRules = (validation: Object | Array<string>) => {
  let rulesArray = null;
  if (Array.isArray(validation)) {
    rulesArray = validation.map(
      ruleDef => (Array.isArray(ruleDef) ? ruleDef : [ruleDef, null])
    );
  }
  rulesArray = Reflect.ownKeys(validation).map(ruleName => [
    ruleName,
    validation[ruleName],
  ]);
  return rulesArray.filter(def => rules[def[0]]);
};

const formValidationRules = (modules: Array<Object>) =>
  modules.reduce((formRules, module) => {
    if (module.validation) {
      const fieldRules = normalizeRules(module.validation);
      formRules[module.name] = fieldRules.map(def => [
        rules[def[0]],
        getRuleMessage(def[0], def[1], module.name),
      ]);
    }
    return formRules;
  }, {});

export default formValidationRules;
