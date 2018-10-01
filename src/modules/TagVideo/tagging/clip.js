// @flow

export const timeToPx = (
  span: number,
  timeline: number,
  width: number
): number => (span / timeline) * width;

export const pxToTime = (px: number, timeline: number, width: number): number =>
  (px / width) * timeline;

export const MIN_SPAN_SEC = 0.1;
export const DEFAULT_SPAN_SEC = 3;

const pad = (value: number) => `${value}`.padStart(2, '0');

export const tagId = (tag: Object) => `${tag.start}-${tag.end}`;

export const formatTime = (time: number): string => {
  if (!time) {
    return '00:00:00';
  }
  const secondsTotal = Math.floor(time);
  const hours = Math.floor(secondsTotal / 3600);
  const minutesTotal = Math.floor(secondsTotal / 60);

  const minutes = minutesTotal - hours * 60;
  const seconds = secondsTotal - minutesTotal * 60;
  const ms = Math.floor((time - secondsTotal) * 100);

  const hstr = hours ? `${pad(hours)}:` : '';
  return `${hstr}${pad(minutes)}:${pad(seconds)}.${pad(ms)}`;
};

const parsePart = part => {
  if (!part) {
    throw new Error('invalid part');
  }
  const n = +part.trim();
  if (Number.isNaN(n)) {
    throw new Error('invalid part');
  }
  return n;
};

export const parseTime = (str: string): ?number => {
  try {
    const parts = str
      .trim()
      .split(':')
      .reverse();

    if (!parts.length) {
      return null;
    }
    const s = parsePart(parts[0]);
    const m = parts[1] ? parsePart(parts[1]) : 0;
    const h = parts[2] ? parsePart(parts[2]) : 0;
    return 3600 * h + 60 * m + s;
  } catch (e) {
    return null;
  }
};

const scales = [
  [1, 1],
  [5, 5],
  [15, 15],
  [30, 30],
  [1, 60],
  [5, 5 * 60],
  [15, 15 * 60],
  [30, 30 * 60],
  [1, 60 * 60],
];

const bestInterval = (interval: number) =>
  scales.find(set => set[2] > interval);

export const getTicks = (
  start: number,
  end: number,
  width: number,
  size: number
): Array<string> => {
  const count = Math.floor(width / size);
  const int = bestInterval(Math.abs(end - start) / count);
  return [];
};

export class RangeBoundaries {
  static start(
    value: number,
    startTime: number,
    endTime: number,
    duration: number,
    minInterval?: number = MIN_SPAN_SEC
  ) {
    let start = value;
    let end = endTime;
    if (start < 0) {
      start = 0;
    } else if (start > endTime) {
      end = Math.min(duration, start + (endTime - startTime));
    } else if (endTime - start < MIN_SPAN_SEC) {
      end = Math.min(duration, start + minInterval);
    }
    return { start, end };
  }

  static move(
    delta: number,
    startTime: number,
    endTime: number,
    duration: number
  ) {
    let start = startTime + delta;
    let end = endTime + delta;
    if (start < 0) {
      start = 0;
      end = endTime - startTime;
    }
    if (end > duration) {
      start = duration - (endTime - startTime);
      end = duration;
    }
    return { start, end };
  }

  static end(
    value: number,
    startTime: number,
    endTime: number,
    duration: number
  ) {
    let end = value;
    if (end > duration) {
      end = duration;
    } else if (end < startTime || end - startTime < MIN_SPAN_SEC) {
      end = startTime + MIN_SPAN_SEC;
    }
    return { start: startTime, end };
  }
}
