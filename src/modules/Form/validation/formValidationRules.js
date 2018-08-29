// @flow
import { rules } from '../../../common/validation';

import ModuleType from '../../Module/ModuleType';

const supportedRules = new Set([
  'isRequired',
  'isNotEmpty',
  'isNumber',
  'isEmail',
  'isTrue',
]);

const defaultMessages = {
  isRequired: (field: string) => `${field} is required`,
  isNotEmpty: (field: string) => `${field} should not be empty`,
  isEmail: (field: string) => `${field} should be valid email address`,
  isNumber: (field: string) => `${field} should be valid numbers`,
  isTrue: (field: string) => `${field} should be truthy`,
};

const getMessage = (rule: string, message: ?string, name: string): string => {
  if (message) {
    return message;
  }
  const factory = defaultMessages[rule];
  return factory ? factory(name) : `${name} failed ${rule}`;
};

const ruleFactory = (module: Object, ruleName: string, message: ?string) => {
  let rule = null;
  switch (ruleName) {
    case 'isTrue':
      rule = rules.isTrue;
      break;
    case 'isEmail':
      rule = rules.isEmail;
      break;
    case 'isNumber':
      rule = rules.isNumber;
      break;
    case 'isNotEmpty':
    case 'isRequired': {
      if (module.type === ModuleType.multiselect) {
        rule = (value: any) => !!value && value.length > 0;
      } else {
        rule = rules.isRequired;
      }
      break;
    }
    default:
      throw new Error(`unsupported rule ${ruleName}`);
  }
  return [rule, getMessage(ruleName, message, module.name)];
};

const normalizeRules = (validation: Object | Array<string>) => {
  let rulesArray = null;
  if (Array.isArray(validation)) {
    rulesArray = validation.map(
      ruleDef => (Array.isArray(ruleDef) ? ruleDef : [ruleDef, null])
    );
  } else {
    rulesArray = Reflect.ownKeys(validation).map(ruleName => [
      ruleName,
      validation[ruleName],
    ]);
  }
  return rulesArray.filter(def => supportedRules.has(def[0]));
};

const formValidationRules = (modules: Array<Object>) =>
  modules.reduce((formRules, module) => {
    if (!module.validation) {
      return formRules;
    }
    const fieldRules = normalizeRules(module.validation);
    return {
      ...formRules,
      [module.name]: fieldRules.map(def => ruleFactory(module, def[0], def[1])),
    };
  }, {});

export default formValidationRules;
