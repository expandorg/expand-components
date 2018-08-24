import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Selection.styl';

const createRect = ({ x1, x2, y1, y2 }) => ({
  left: Math.min(x1, x2),
  top: Math.min(y1, y2),
  width: Math.abs(x1 - x2),
  height: Math.abs(y1 - y2),
});

export default class Selection extends Component {
  static propTypes = {
    selection: PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    }),
  };

  static defaultProps = {
    selection: null,
  };

  render() {
    const { selection } = this.props;
    if (!selection) {
      return null;
    }
    return (
      <div
        className="gem-selectregion-selection"
        style={createRect(selection)}
      />
    );
  }
}
