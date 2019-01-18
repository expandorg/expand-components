// @flow
import { getElementOffset } from '@expandorg/components/src/common/dom';

export const getPositionById = (id: string) => {
  const el = document.getElementById(id);
  if (!el) {
    return null;
  }
  const { width, height } = el.getBoundingClientRect();
  const { top, left } = getElementOffset(el);

  return { width, height, top, left };
};

const MARGIN = 10;
const HINT_WIDTH = 320;

export const getHintPositionByOrientation = (
  { width, height, top, left }: Object,
  orientation: string = 'right'
) => {
  switch (orientation) {
    case 'left':
      return {
        top,
        left: -left - MARGIN - width,
      };
    case 'top':
      return {
        top: top - height,
        left: left - HINT_WIDTH / 2,
      };
    case 'bottom':
      return {
        top: top + MARGIN + height,
        left,
      };
    default:
      break;
  }

  return {
    top,
    left: left + MARGIN + width,
  };
};
