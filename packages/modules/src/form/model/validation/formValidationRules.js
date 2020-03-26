// @flow
import getDefaultRuleMessage from './getDefaultRuleMessage';

import type { Module, ModuleControlsMap } from '../types.flow';

const getFieldRules = (validation: Object, rules: Object) => {
  return Reflect.ownKeys(validation)
    .filter((ruleName) => !!rules[ruleName])
    .map((ruleName) => {
      const fn = rules[ruleName];
      const ruleParams = validation[ruleName];

      if (Array.isArray(ruleParams)) {
        return [fn, ...ruleParams];
      }

      if (typeof ruleParams === 'string') {
        return [fn, ruleParams];
      }
      return [fn, getDefaultRuleMessage(ruleName)];
    });
};

const formValidationRules = (
  modules: ?Array<Module>,
  controlsMap: ModuleControlsMap
): Object => {
  const rules = {};
  if (!modules) {
    return rules;
  }
  return modules.reduce((formRules, module) => {
    const Control = controlsMap[module.type];
    if (!module.validation || !Control || !Control.module.validation) {
      if (module.modules && module.modules) {
        return {
          ...formRules,
          ...formValidationRules(module.modules, controlsMap),
        };
      }
      return formRules;
    }
    return {
      ...formRules,
      ...formValidationRules(module.modules, controlsMap),
      [module.name]: getFieldRules(
        module.validation,
        Control.module.validation
      ),
    };
  }, rules);
};

export default formValidationRules;
