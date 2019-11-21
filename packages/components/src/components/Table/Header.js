import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Header({ children, className }) {
  return <tr className={cn('gem-table-header', className)}>{children}</tr>;
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: null,
};
