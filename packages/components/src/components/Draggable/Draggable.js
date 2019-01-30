import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { stopEvt, getMousePosition } from '../../common/dom';

export default class Draggable extends Component {
  static propTypes = {
    className: PropTypes.string,
    onDrag: PropTypes.func.isRequired,
    onDragStart: PropTypes.func,
    onDragEnd: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    onDragStart: Function.prototype,
    onDragEnd: Function.prototype,
  };

  state = { pressed: false, x: 0, y: 0 };

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = event => {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);

    const { onDragStart } = this.props;

    const { x, y } = getMousePosition(event);
    this.setState({ pressed: true, x, y });
    onDragStart();

    stopEvt(event);
  };

  handleMouseMove = event => {
    const { onDrag } = this.props;
    const { pressed } = this.state;
    if (pressed) {
      stopEvt(event);
      const { x, y } = getMousePosition(event);
      const { x: oldX, y: oldY } = this.state;
      const dx = x - oldX;
      const dy = y - oldY;
      this.setState({ x, y }, () => onDrag(dx, dy));
    }
  };

  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    const { onDragEnd } = this.props;
    this.setState({ pressed: false, x: 0, y: 0 }, () => onDragEnd());
  };

  render() {
    const { children, ...rest } = this.props;

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
      <div onMouseDown={this.handleMouseDown} {...rest}>
        {children}
      </div>
    );
  }
}
