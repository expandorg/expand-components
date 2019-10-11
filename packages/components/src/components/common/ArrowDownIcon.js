import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { ReactComponent as ArrowDown } from '@expandorg/uikit/assets/arrow-down.svg';

import './ArrowDownIcon.styl';

export default function ArrowDownIcon({ className, theme }) {
  return (
    <ArrowDown
      width="11"
      height="22"
      viewBox="0 0 11 6"
      className={cn(
        'gem-arrowdownicon',
        `gem-arrowdownicon__${theme}`,
        className
      )}
    />
  );
}

ArrowDownIcon.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
};

ArrowDownIcon.defaultProps = {
  className: null,
  theme: null,
};
