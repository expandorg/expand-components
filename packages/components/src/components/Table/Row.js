import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Row({ children, className }) {
  return <tr className={cn('gem-table-row', className)}>{children}</tr>;
}

Row.propTypes = {
  className: PropTypes.string,
};

Row.defaultProps = {
  className: null,
};
