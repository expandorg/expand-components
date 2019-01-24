// @flow

export const getModuleTypes = (
  modules?: Array<Module> | Module
): Array<string> => {
  if (!modules) {
    return [];
  }
  if (Array.isArray(modules)) {
    return modules.reduce((all, module) => {
      if (!module.type) {
        return all;
      }
      return all.concat(module.type, getModuleTypes(module.modules));
    }, []);
  }
  if (!modules.type) {
    return [];
  }
  return [modules.type, ...getModuleTypes(modules.modules)];
};

export const getReasons = (
  modules: Array<Module>,
  modulesMap: Object
): Array<string> => {
  const types = Array.from(new Set(getModuleTypes(modules)));
  const formReasons = types.reduce((all, type) => {
    const moduleControl = modulesMap[type];
    if (
      !moduleControl ||
      !moduleControl.module ||
      !moduleControl.module.report
    ) {
      return all;
    }
    return all.concat(moduleControl.module.report);
  }, []);
  return Array.from(new Set(formReasons));
};
