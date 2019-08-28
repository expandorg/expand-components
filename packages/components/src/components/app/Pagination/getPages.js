// @flow

const range = (count: number, from: number = 0): Array<number> =>
  [...Array(count).keys()].map(i => i + from);

export default function getPages(
  selected: number,
  total: number,
  display: number
) {
  if (total <= display) {
    return range(total);
  }
  const middle = Math.floor(display / 2);
  let start = Math.max(selected - middle, 0);
  if (selected + middle > total - 1) {
    start = total - display + 1;
  }
  return range(display, start);
}
