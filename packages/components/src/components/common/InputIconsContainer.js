import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './InputIconsContainer.styl';

export default function InputIconsContainer({ children, className, theme }) {
  return (
    <div
      className={cn(
        'gem-inputiconscontainer',
        `gem-inputiconscontainer__${theme}`,
        className
      )}
    >
      {children}
    </div>
  );
}

InputIconsContainer.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
};

InputIconsContainer.defaultProps = {
  className: null,
  theme: null,
};
