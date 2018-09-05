// @flow
import ModuleType from '../Module/ModuleType';

export const reportReasons = {
  [ModuleType.video]: ['video is not loading'],
  [ModuleType.image]: ['Image is not loading'],
  [ModuleType.text]: ['Unable to fill text field'],
  [ModuleType.number]: ['Unable to fill number field'],
  [ModuleType.email]: ['Unable to fill email field'],
  [ModuleType.password]: ['Unable to fill password field'],
};

const getModuleTypes = (modules?: Array<Module> | Module) => {
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

export const getReasons = (modules: Array<Module>): Array<string> => {
  const formReasons = getModuleTypes(modules).reduce((all, type) => {
    const reasons = reportReasons[type];
    if (!reasons) {
      return all;
    }
    return all.concat(reasons);
  }, []);
  return Array.from(new Set(formReasons));
};
