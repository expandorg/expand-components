// @flow
export const range = (count: number): Array<number> => [...Array(count).keys()];

export const rangeFrom = (from: number, to: number): Array<number> => [
  ...range(to - from).map((_, i) => i + from),
];
