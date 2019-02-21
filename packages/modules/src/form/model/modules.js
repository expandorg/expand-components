// @flow

export const deepCopyModule = (
  module: Object,
  unqiIdGenerator: (type: string) => string
) => {
  const { modules: children, type, ...rest } = module;
  let modules;

  if (children) {
    modules = children.map(child => deepCopyModule(child));
  }

  return {
    ...rest,
    type,
    name: unqiIdGenerator(type),
    modules,
  };
};

export const getModuleControlsMap = (
  controls: Array<Object>
): ModuleControlsMap =>
  controls.reduce(
    (map, Control) => ({
      ...map,
      [Control.module.type]: Control,
    }),
    {}
  );

export const getFormModulesNames = (root: Object) => {
  let names = root.name ? [root.name] : [];
  if (root.modules) {
    names = root.modules.reduce(
      (all, m) => all.concat(getFormModulesNames(m)),
      names
    );
  }
  return names;
};

export const groupModulesByCategory = (controls: Array<Object>) => {
  const grouped = controls.reduce((map, Control) => {
    if (Control.module.editor && Control.module.editor.category) {
      let category = map[Control.module.editor.category];
      if (!category) {
        map[Control.module.editor.category] = [];
        category = map[Control.module.editor.category];
      }
      category.push(Control);
    }
    return map;
  }, {});
  return grouped;
};
