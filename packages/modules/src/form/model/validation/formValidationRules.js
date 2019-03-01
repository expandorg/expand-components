// @flow
import getDefaultRuleMessage from './getDefaultRuleMessage';

import type { Module } from '../types.flow';

const getFieldRules = (validation: Object, rules: Object) =>
  Reflect.ownKeys(validation)
    .filter(ruleName => !!rules[ruleName])
    .map(ruleName => {
      const message =
        typeof validation[ruleName] === 'string'
          ? validation[ruleName]
          : getDefaultRuleMessage(ruleName);

      return [rules[ruleName], message];
    });

const formValidationRules = (
  modules: Array<Module>,
  controlsMap: ModuleControlsMap
) =>
  modules.reduce((formRules, module) => {
    const Control = controlsMap[module.type];
    if (!Control || !Control.module.validation || !module.validation) {
      return formRules;
    }
    return {
      ...formRules,
      [module.name]: getFieldRules(
        module.validation,
        Control.module.validation
      ),
    };
  }, {});

export default formValidationRules;
