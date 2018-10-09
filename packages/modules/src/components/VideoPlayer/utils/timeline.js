// @flow

export const timeToPx = (
  span: number,
  timeline: number,
  width: number
): number => (span / timeline) * width;

export const pxToTime = (px: number, timeline: number, width: number): number =>
  (px / width) * timeline;
