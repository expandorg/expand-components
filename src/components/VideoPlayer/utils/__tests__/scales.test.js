import { getTicks, calculateInterval, getShiftedTicks } from '../scales';

describe('scales helpers', () => {
  describe('calculateInterval()', () => {
    const start = 0;
    const end = 60; // sec
    const width = 500; // px
    const size = 50;

    it('should return correct interval', () => {
      const interval = calculateInterval(start, end, width, size);

      expect(interval).toEqual(6);
    });
  });

  describe('getShiftedTicks()', () => {
    it('should return correct ticks array', () => {
      expect(getShiftedTicks(0, 50, 10)).toEqual([10, 20, 30, 40]);
      expect(getShiftedTicks(5, 55, 10)).toEqual([10, 20, 30, 40, 50]);
      expect(getShiftedTicks(60, 65, 10)).toEqual([]);
      expect(getShiftedTicks(60, 70, 10)).toEqual([]);
      expect(getShiftedTicks(62, 72, 10)).toEqual([70]);
      expect(getShiftedTicks(0, 240, 60)).toEqual([60, 120, 180]);
    });
  });

  describe('getTicks()', () => {
    it('should format seconds ', () => {
      const ticks = getTicks(0, 130, 985, 50);
      expect(ticks).toEqual([
        { tick: 10, time: '00:10' },
        { tick: 20, time: '00:20' },
        { tick: 30, time: '00:30' },
        { tick: 40, time: '00:40' },
        { tick: 50, time: '00:50' },
        { tick: 60, time: '01:00' },
        { tick: 70, time: '01:10' },
        { tick: 80, time: '01:20' },
        { tick: 90, time: '01:30' },
        { tick: 100, time: '01:40' },
        { tick: 110, time: '01:50' },
        { tick: 120, time: '02:00' },
      ]);
    });
  });
});
