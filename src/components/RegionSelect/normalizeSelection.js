// @flow

const normalizeSelection = (
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

export default normalizeSelection;
