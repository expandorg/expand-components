import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './JobLogo.styl';

const getInitials = (name) => {
  if (!name) {
    return name;
  }
  return name[0];
};

export default function JobLogo({ src, name, size, className }) {
  if (src) {
    return (
      <img
        src={src}
        className={cn(
          'gem-joblogo',
          'gem-joblogo-img',
          `gem-joblogo-${size}`,
          className
        )}
        alt=""
      />
    );
  }
  return (
    <div
      className={cn(
        'gem-joblogo',
        `gem-joblogo-${size}`,
        'gem-joblogo-text',
        className
      )}
    >
      {getInitials(name)}
    </div>
  );
}

JobLogo.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOf(['medium', 'large']),
  className: PropTypes.string,
};

JobLogo.defaultProps = {
  src: null,
  name: null,
  size: 'medium',
  className: null,
};
