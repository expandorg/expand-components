// @flow
import { rules, ruleMessages } from '../../common/validation';

const formValidationRules = (modules: Array<Object>) => {
  const rulesObject = modules.reduce((result, module) => {
    if (module.validation && module.validation.length) {
      const moduleTitle = module.name;

      result[module.name] = module.validation // eslint-disable-line
        .filter(ruleName => !!rules[ruleName])
        .map(ruleName => [
          rules[ruleName],
          ruleMessages[ruleName](moduleTitle),
        ]);
    }
    return result;
  }, {});
  return rulesObject;
};

export default formValidationRules;
