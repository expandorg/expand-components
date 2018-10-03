// @flow

export const MIN_SPAN_SEC = 0.1;

export default class RangeBoundaries {
  static hasBoundaries = (limitFrom: ?number, limitTo: ?number) => {
    const from = typeof limitFrom !== 'undefined';
    const to = typeof limitTo !== 'undefined';
    return { from, to };
  };

  static start(
    value: number,
    startTime: number,
    endTime: number,
    duration: number,
    limitFrom: ?number,
    limitTo: ?number,
    minInterval?: number = MIN_SPAN_SEC
  ) {
    let start = value;
    let end = endTime;
    if (start < (limitFrom || 0)) {
      start = limitFrom || 0;
    } else if (start > endTime) {
      end = Math.min(limitTo || duration, start + (endTime - startTime));
    } else if (endTime - start < MIN_SPAN_SEC) {
      end = Math.min(limitTo || duration, start + minInterval);
    }
    return { start, end };
  }

  static move(
    delta: number,
    startTime: number,
    endTime: number,
    duration: number,
    limitFrom: ?number,
    limitTo: ?number
  ) {
    let start = startTime + delta;
    let end = endTime + delta;

    if (start < (limitFrom || 0)) {
      start = limitFrom || 0;
      end = (limitFrom || 0) + (endTime - startTime);
    }

    if (end > (limitTo || duration)) {
      start = (limitTo || duration) - (endTime - startTime);
      end = limitTo || duration;
    }
    return { start, end };
  }

  static end(
    value: number,
    startTime: number,
    endTime: number,
    duration: number,
    limitFrom: ?number,
    limitTo: ?number
  ) {
    let end = value;
    if (end > (limitTo || duration)) {
      end = limitTo || duration;
    } else if (end < startTime || end - startTime < MIN_SPAN_SEC) {
      end = startTime + MIN_SPAN_SEC;
    }
    return { start: startTime, end };
  }
}
