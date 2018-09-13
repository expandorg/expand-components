// @flow

export const normalizeRect = (
  selection: Object,
  width: number,
  height: number
) => {
  if (!selection) {
    return null;
  }
  const { x1, x2, y1, y2 } = selection;
  return {
    x1: Math.max(Math.min(x1, x2), 0),
    y1: Math.max(Math.min(y1, y2), 0),
    x2: Math.min(Math.max(x1, x2), width),
    y2: Math.min(Math.max(y1, y2), height),
  };
};

export const fixRatio = (rect: Object, d1: number, d2: number) => {
  if (!rect) {
    return rect;
  }
  const factor = d1 / d2;
  return {
    x1: rect.x1 * factor,
    y1: rect.y1 * factor,
    x2: rect.x2 * factor,
    y2: rect.y2 * factor,
  };
};
