// @flow

import type {
  Form,
  Module,
  ModuleControl,
  ModuleControlsMap,
} from './types.flow';

export const dfsVisitor = (
  modules: Array<Module>,
  fn: (mod: Module) => any
) => {
  const queue = [...modules];
  while (queue.length) {
    const m = queue.shift();
    fn(m);
    if (m.modules && m.modules.length) {
      queue.push(...m.modules);
    }
  }
};

export const findModuleVisitor = (
  modules: Array<Module>,
  condition: Module => boolean
): ?Module => {
  // eslint-disable-next-line
  for (const mod of modules) {
    const meet = condition(mod);
    if (meet) {
      return mod;
    }
    if (mod.modules) {
      const meetChildren = findModuleVisitor(mod.modules, condition);

      if (meetChildren) {
        return meetChildren;
      }
    }
  }
  return null;
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
