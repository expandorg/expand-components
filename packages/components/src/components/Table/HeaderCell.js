import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function HeaderCell({ children, className }) {
  return <th className={cn('gem-table-header-cell', className)}>{children}</th>;
}

HeaderCell.propTypes = {
  className: PropTypes.string,
};

HeaderCell.defaultProps = {
  className: null,
};
