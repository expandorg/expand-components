// @flow

const getOrderedItems = (settings: Object, presence: Array<string>) => {
  const list = Reflect.ownKeys(settings)
    .filter((id) => presence.includes(id))
    .map((id) => ({ id, ...settings[id] }));
  return list.sort((a, b) => a.order - b.order);
};

export const findPrev = (
  active: string,
  settings: Object,
  presence: Array<string>
) => {
  const { order } = settings[active];
  const reversed = getOrderedItems(settings, presence).reverse();
  const prev = reversed.find((el) => el.order < order);
  return prev ? prev.id : reversed[0].id;
};

export const findNext = (
  active: string,
  settings: Object,
  presence: Array<string>
) => {
  const { order } = settings[active];
  const ordered = getOrderedItems(settings, presence);
  const next = ordered.find((el) => el.order > order);
  return next ? next.id : ordered[0].id;
};
