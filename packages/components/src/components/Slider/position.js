// @flow

export const round = (number: number, decimals: number) => {
  if (!Number.isNaN(parseFloat(number)) && Number.isFinite(number)) {
    const decimalPower = 10 ** decimals;
    return Math.round(parseFloat(number) * decimalPower) / decimalPower;
  }
  return NaN;
};

export const trimValue = (
  value: number,
  max: number,
  min: number,
  step: number
) => {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }

  return round(value, (step.toString().split('.')[1] || []).length);
};

export const getStyles = (
  max: number,
  min: number,
  value: number,
  vertical: boolean
) => {
  const progress = 100 * ((value - min) / (max - min));

  return vertical ? { bottom: `${progress}%` } : { left: `${progress}%` };
};

export const positionToValue = (
  position: Object,
  max: number,
  min: number,
  step: number,
  start: number,
  len: number,
  vertical: boolean
) => {
  const offset = vertical ? start + len - position.y : position.x - start;
  const pos = (offset / len) * (max - min);
  return trimValue(Math.round(pos / step) * step + min, max, min, step);
};
