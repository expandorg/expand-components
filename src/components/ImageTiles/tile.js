// @flow

export const getTileStyle = (
  row: number,
  column: number,
  rows: number,
  columns: number
) => ({
  left: `${(column / columns) * 100}%`,
  top: `${(row / rows) * 100}%`,
  height: `${(1 / rows) * 100}%`,
  width: `${(1 / columns) * 100}%`,
});

export const getTileIndex = (row: number, column: number, columns: number) =>
  columns * row + column;
