/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './InputLabel.styl';

export default function InputLabel({ placeholder, className }) {
  if (!placeholder) {
    return null;
  }
  return (
    <label
      className={cn('gem-input-label', className)}
      placeholder={placeholder}
    />
  );
}

InputLabel.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

InputLabel.defaultProps = {
  placeholder: undefined,
  className: null,
};
