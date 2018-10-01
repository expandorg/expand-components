// @flow

export const MIN_SPAN_SEC = 0.1;

export const DEFAULT_SPAN_SEC = 3;

export default class RangeBoundaries {
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
