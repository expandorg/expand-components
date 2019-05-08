// @flow

import type {
  Form,
  Module,
  ModuleControl,
  ModuleControlsMap,
} from './types.flow';

export const deepCopyModule = (
  module: Module,
  getName: (m: Module) => string = m => m.name
) => {
  const { modules: children, type, ...rest } = module;
  let modules;

  if (children) {
    modules = children.map<Module>(child => deepCopyModule(child, getName));
  }

  return {
    ...rest,
    type,
    name: getName(module),
    modules,
  };
};

export const getModuleControlsMap = (
  controls: Array<ModuleControl>
): ModuleControlsMap =>
  controls.reduce(
    (map, Control) => ({
      ...map,
      [Control.module.type]: Control,
    }),
    {}
  );

export const getFormModulesNames = (root: Module | Form): Array<string> => {
  let names = root.name ? [root.name] : [];
  if (root.modules) {
    names = root.modules.reduce(
      (all, m) => all.concat(getFormModulesNames(m)),
      names
    );
  }
  // $FlowFixMe
  return names;
};

export const getFormModules = (root: Module | Form): Array<Module> => {
  let result = root.name ? [root] : [];
  if (root.modules) {
    result = root.modules.reduce(
      (all, m) => all.concat(getFormModules(m)),
      result
    );
  }
  // $FlowFixMe
  return result;
};

export const groupModulesByCategory = (controls: Array<ModuleControl>) => {
  const grouped = controls.reduce((map, Control) => {
    if (Control.module.editor && Control.module.editor.category) {
      let category = map[Control.module.editor.category];
      if (!category) {
        map[Control.module.editor.category] = [];
        // $FlowFixMe
        category = map[Control.module.editor.category];
      }
      category.push(Control);
    }
    return map;
  }, {});
  return grouped;
};
