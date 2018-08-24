import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Draggable from '../Draggable';

export default class DragHandler extends Component {
  static propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    xC: PropTypes.string.isRequired,
    yC: PropTypes.string.isRequired,
    onDrag: PropTypes.func.isRequired,
    onDragEnd: PropTypes.func.isRequired,
  };

  handleDrag = (dx, dy) => {
    const { onDrag, xC, yC } = this.props;
    onDrag(dx, dy, xC, yC);
  };

  handleDragEnd = () => {
    const { onDragEnd } = this.props;
    onDragEnd();
  };

  render() {
    const { x, y } = this.props;
    return (
      <Draggable
        style={{ left: x, top: y }}
        className="gem-selectregion-drag"
        onDrag={this.handleDrag}
        onDragEnd={this.handleDragEnd}
      />
    );
  }
}
