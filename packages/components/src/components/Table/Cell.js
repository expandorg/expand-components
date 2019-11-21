import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function Cell({ children, className, ...rest }) {
  return (
    <td className={cn('gem-table-cell', className)} {...rest}>
      {children}
    </td>
  );
}

Cell.propTypes = {
  className: PropTypes.string,
};

Cell.defaultProps = {
  className: null,
};
