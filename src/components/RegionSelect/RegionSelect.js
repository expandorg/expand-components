import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import { stopEvt, getElementOffset, getMousePosition } from '../../common/dom';

export default class RegionSelect extends Component {
  static propTypes = {
    className: PropTypes.string,
    onSelection: PropTypes.func.isRequired,
    onSelectionEnd: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    onSelectionEnd: Function.prototype,
  };

  constructor(props) {
    super(props);
    this.container = createRef();
    this.state = {
      pressed: false,
      left: 0,
      top: 0,
      rect: null,
    };
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = evt => {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);

    const { top, left } = getElementOffset(this.container.current);
    const { x, y } = getMousePosition(evt);
    this.setState({
      pressed: true,
      top,
      left,
      rect: { x1: x - left, y1: y - top },
    });
    stopEvt(evt);
  };

  handleMouseMove = evt => {
    const { onSelection } = this.props;
    const {
      pressed,
      top,
      left,
      rect: { x1, y1 },
    } = this.state;
    if (pressed) {
      stopEvt(evt);
      const { x, y } = getMousePosition(evt);
      const rect = { x1, y1, x2: x - left, y2: y - top };
      this.setState({ rect }, () => onSelection(rect));
    }
  };

  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);

    const { onSelectionEnd } = this.props;
    const { rect } = this.state;
    this.setState({ pressed: false });
    onSelectionEnd(rect.x2 ? rect : null);
  };

  render() {
    const { children, className } = this.props;
    return (
      <div
        ref={this.container}
        className={className}
        onMouseDown={this.handleMouseDown}
      >
        {children}
      </div>
    );
  }
}
