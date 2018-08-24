import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { stopEvt, getElementOffset, getMousePosition } from '../../common/dom';

import './SelectRegionBase.styl';

export default class SelectRegionBase extends Component {
  static propTypes = {
    className: PropTypes.string,
    onSelectionBegin: PropTypes.func,
    onSelection: PropTypes.func,
    onSelectionEnd: PropTypes.func,
  };

  static defaultProps = {
    className: null,
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
    const { onSelection } = this.props;
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
      this.setState({ selection }, () => onSelection(selection));
    }
  };

  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);

    const { onSelectionEnd } = this.props;
    const { selection } = this.state;
    this.setState({ pressed: false, selection: null });
    onSelectionEnd(selection.x2 ? selection : null);
  };

  render() {
    const { children, className } = this.props;
    const { selection } = this.state;

    return (
      <div
        ref={this.container}
        className={cn('gem-selectregion', className)}
        onMouseDown={this.handleMouseDown}
      >
        {children({ selection: selection && selection.x2 ? selection : null })}
      </div>
    );
  }
}
