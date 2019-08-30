// @flow

import type {
  Form,
  Module,
  ModuleControl,
  ModuleControlsMap,
} from './types.flow';

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
