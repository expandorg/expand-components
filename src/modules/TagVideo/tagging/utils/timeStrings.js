// @flow

const pad = (value: number) => `${value}`.padStart(2, '0');

export const formatTime = (time: number, options?: Object): string => {
  if (!time) {
    return '00:00:00';
  }
  const opts = { ...{ seconds: true, ms: true, hours: false }, ...options };

  const secondsTotal = Math.floor(time);
  const hours = Math.floor(secondsTotal / 3600);
  const minutesTotal = Math.floor(secondsTotal / 60);

  const minutes = minutesTotal - hours * 60;

  let s = '';
  let milliseconds = '';

  if (opts.seconds) {
    const seconds = secondsTotal - minutesTotal * 60;
    s = `:${pad(seconds)}`;

    if (opts.ms) {
      const ms = Math.round((time - secondsTotal) * 100);
      milliseconds = `.${ms > 10 ? `${ms}`.padEnd(2, '0') : pad(ms)}`;
    }
  }
  const hstr = opts.hours || hours ? `${pad(hours)}:` : '';
  return `${hstr}${pad(minutes)}${s}${milliseconds}`;
};

const parsePart = (part: ?string): number => {
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
