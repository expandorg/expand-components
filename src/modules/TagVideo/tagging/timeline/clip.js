// @flow

export const timeToPx = (
  span: number,
  timeline: number,
  width: number
): number => (span / timeline) * width;

export const pxToTime = (px: number, timeline: number, width: number): number =>
  (px / width) * timeline;

export const DEFAULT_SPAN_SEC = 3;

const pad = value => `${value}`.padStart(2, '0');

export const formatTime = (time: number): string => {
  const secondsTotal = Math.floor(time);
  const hours = Math.floor(secondsTotal / 3600);
  const minutesTotal = Math.floor(secondsTotal / 60);

  const minutes = minutesTotal - hours * 60;
  const seconds = secondsTotal - minutesTotal * 60;
  const ms = Math.floor((time - secondsTotal) * 100);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(ms)}`;
};
