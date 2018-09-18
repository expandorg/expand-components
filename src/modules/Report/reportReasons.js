// @flow

export const getModuleTypes = (
  modules?: Array<Module> | Module
): Array<string> => {
  if (!modules) {
    return [];
  }
  if (Array.isArray(modules)) {
    return modules.reduce(
      (all, module) => all.concat(module.type, getModuleTypes(module.modules)),
      []
    );
  }
  return [modules.type, ...getModuleTypes(modules.modules)];
};

export const getReasons = (
  modules: Array<Module>,
  modulesMap: Object
): Array<string> => {
  const formReasons = getModuleTypes(modules).reduce((all, type) => {
    const moduleControl = modulesMap[type];
    if (!moduleControl.module.report) {
      return all;
    }
    return all.concat(moduleControl.module.report);
  }, []);
  return Array.from(new Set(formReasons));
};
