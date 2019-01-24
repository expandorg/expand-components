import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import './Panel.styl';

export default function Panel({ children, className }) {
  return <div className={cn('gem-panel', className)}>{children}</div>;
}

Panel.propTypes = {
  className: PropTypes.string,
};

Panel.defaultProps = {
  className: null,
};
