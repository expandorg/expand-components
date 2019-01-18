// @flow
export const findActive = (order: number, settings: Object) =>
  Reflect.ownKeys(settings).find(name => {
    if (settings[name].order === order) return name;
    return null;
  });

export const isPrevActive = (
  active: string,
  settings: Object,
  presence: Array<string>
) => {
  const prevIndex = settings[active].order - 1;
  const prev = findActive(prevIndex, settings);
  return prevIndex >= 0 && presence.find(p => prev === p) !== -1;
};

export const isNextActive = (
  active: string,
  settings: Object,
  presence: Array<string>
) => {
  const nextIndex = settings[active].order + 1;

  const next = findActive(nextIndex, settings);
  return (
    nextIndex < Reflect.ownKeys(settings).length &&
    presence.findIndex(p => next === p) !== -1
  );
};
