import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Overlay.module.styl';

export default class Overlay extends Component {
  static propTypes = {
    position: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
    }),
    screen: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    position: null,
  };

  render() {
    const { position, screen } = this.props;
    const { width, height } = screen;

    return (
      <svg className={styles.svg} viewBox={`0 0 ${width} ${height}`}>
        <mask id="myClip">
          <rect
            className={styles.backdrop}
            x="0"
            y="0"
            width={width}
            height={height}
          />
          {position && (
            <rect
              x={position.left - 5}
              y={position.top - 5}
              width={position.width + 10}
              height={position.height + 10}
              fill="black"
            />
          )}
        </mask>
        <rect x="0" y="0" width={width} height={height} mask="url(#myClip)" />
      </svg>
    );
  }
}
