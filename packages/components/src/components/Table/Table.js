import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Table.styl';

export default function Table({ children, className }) {
  return (
    <table className={cn('gem-table', className)}>
      <tbody className="gem-tbody">{children}</tbody>
    </table>
  );
}

Table.propTypes = {
  className: PropTypes.string,
};

Table.defaultProps = {
  className: null,
};
