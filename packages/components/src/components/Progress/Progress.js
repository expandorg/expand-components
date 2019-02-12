import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './Progress.styl';

export default function Progress({ className, value, vertical, min, max }) {
  const classes = cn(
    'gem-progress',
    {
      'gem-progress--horizontal': !vertical,
      'gem-progress--vertical': vertical,
    },
    className
  );
  const progress = ((value - min) / (max - min)) * 100;

  const style = vertical
    ? { height: `${progress}%` }
    : { width: `${progress}%` };

  return (
    <div className={classes}>
      <div className="gem-progress-indicator" style={style} />
    </div>
  );
}

Progress.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  vertical: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
};

Progress.defaultProps = {
  className: null,
  value: 0,
  vertical: false,
  min: 0,
  max: 100,
};
