// @flow

export const canUseDOM = !!(typeof window !== 'undefined' && window.document);

export const targetIsDescendant = (event: Event, parent: any): boolean => {
  let node = event.target;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    // $FlowFixMe
    node = node.parentNode;
  }
  return false;
};

export const KeyCodes = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  RETURN: 13,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
};
export const getElementOffset = (el: HTMLElement) => {
  const { top, left } = el.getBoundingClientRect();

  return {
    // $FlowFixMe
    top: top - el.scrollTop - document.documentElement.clientTop,
    // $FlowFixMe
    left: left - el.scrollLeft - document.documentElement.clientLeft,
  };
};

export const getMousePosition = (event: MouseEvent) => ({
  x: event.pageX - (window.scrollX || window.pageXOffset),
  y: event.pageY - (window.scrollY || window.pageYOffset),
});

export const getTouchPosition = (event: TouchEvent) => ({
  x: event.touches[0].pageX - (window.scrollX || window.pageXOffset),
  y: event.touches[0].pageY - (window.scrollY || window.pageYOffset),
});

export const stopEvt = (event: Event): void => {
  event.stopPropagation();
  event.preventDefault();
};
