// @flow

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
