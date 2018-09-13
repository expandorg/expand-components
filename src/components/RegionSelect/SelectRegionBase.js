import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { stopEvt, getElementOffset, getMousePosition } from '../../common/dom';

import { normalizeRect } from './rect';

import './styles.styl';

const validate = (r, size) =>
  !r || (Math.abs(r.x2 - r.x1) >= size && Math.abs(r.y2 - r.y1) >= size);

export default class SelectRegionBase extends Component {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    minSize: PropTypes.number,
    onSelectionBegin: PropTypes.func,
    onSelection: PropTypes.func,
    onSelectionEnd: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    width: 10,
    height: 10,
    minSize: 10,
    onSelectionBegin: Function.prototype,
    onSelection: Function.prototype,
    onSelectionEnd: Function.prototype,
  };

  constructor(props) {
    super(props);
    this.container = createRef();

    this.state = {
      pressed: false,
      left: 0,
      top: 0,
      selection: null,
      normalized: null,
    };
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = evt => {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);

    const { onSelectionBegin } = this.props;

    const { top, left } = getElementOffset(this.container.current);
    const { x, y } = getMousePosition(evt);
    const selection = { x1: x - left, y1: y - top };

    this.setState(
      {
        pressed: true,
        top,
        left,
        selection,
      },
      () => onSelectionBegin(selection)
    );
    stopEvt(evt);
  };

  handleMouseMove = evt => {
    const { onSelection, width, height } = this.props;
    const {
      pressed,
      top,
      left,
      selection: { x1, y1 },
    } = this.state;

    if (pressed) {
      stopEvt(evt);
      const { x, y } = getMousePosition(evt);
      const selection = { x1, y1, x2: x - left, y2: y - top };
      const normalized = normalizeRect(selection, width, height);
      this.setState({ selection, normalized }, () => onSelection(normalized));
    }
  };

  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);

    const { onSelectionEnd, minSize } = this.props;
    const { normalized } = this.state;
    this.setState({ pressed: false, selection: null, normalized: null });
    if (validate(normalized, minSize)) {
      onSelectionEnd(normalized);
    }
  };

  render() {
    const { children, className, width, height } = this.props;
    const { normalized: selection } = this.state;

    return (
      <div
        ref={this.container}
        className={cn('gem-selectregion', className)}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        onMouseDown={this.handleMouseDown}
      >
        {children({ selection })}
      </div>
    );
  }
}
