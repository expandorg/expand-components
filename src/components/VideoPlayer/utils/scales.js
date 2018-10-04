// @flow
import { formatTime } from './timeStrings';

const mmss = (t: number): string => formatTime(t, { ms: false });
const hhmm = (t: number): string =>
  formatTime(t, { seconds: false, hours: true });

const scales = [
  [mmss, 1],
  [mmss, 5],
  [mmss, 10],
  [mmss, 15],
  [mmss, 30],
  [hhmm, 60],
  [hhmm, 2 * 60],
  [hhmm, 5 * 60],
  [hhmm, 10 * 60],
  [hhmm, 15 * 60],
  [hhmm, 30 * 60],
  [hhmm, 60 * 60],
];

export const calculateInterval = (
  start: number,
  end: number,
  width: number,
  size: number
): number => {
  const count = Math.floor(width / size);
  return Math.abs(end - start) / count;
};

export const getShiftedTicks = (
  start: number,
  end: number,
  increment: number
): Array<number> => {
  const first = start + increment - (start % increment);
  let next = first;
  const result = [];
  while (next < end) {
    result.push(next);
    next += increment;
  }
  return result;
};

export const getTicks = (
  start: number,
  end: number,
  width: number,
  size: number
): Array<{ tick: number, time: string }> => {
  const intervalSeconds = calculateInterval(start, end, width, size);
  const s = scales.find(set => set[1] > intervalSeconds);
  if (!s) {
    return [];
  }
  const [formatter, increment] = s;
  const times = getShiftedTicks(start, end, increment);
  return times.map(tick => ({
    tick,
    time: formatter(tick),
  }));
};
