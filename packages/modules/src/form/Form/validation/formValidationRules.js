// @flow

const getFieldRules = (validation: Object, rules: Object) =>
  Reflect.ownKeys(validation)
    .filter(ruleName => !!rules[ruleName])
    .map(ruleName => [rules[ruleName], validation[ruleName]]);

const formValidationRules = (modules: Array<Module>, controlsMap: Object) =>
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
