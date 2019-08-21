import React from 'react';
import PropTypes from 'prop-types';

import styles from './Overlay.module.styl';

export default function Overlay({ position, screen, onClick }) {
  const { width, height } = screen;

  return (
    <svg
      className={styles.svg}
      viewBox={`0 0 ${width} ${height}`}
      onClick={onClick}
    >
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

Overlay.propTypes = {
  position: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }),
  onClick: PropTypes.func,
  screen: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

Overlay.defaultProps = {
  onClick: undefined,
  position: null,
};
