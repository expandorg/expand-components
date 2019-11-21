import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default function ScrollContainer({ children, className }) {
  return (
    <div className={cn('gem-table-scroll', className)}>
      <div className="gem-table-scroll-inner">{children}</div>
    </div>
  );
}

ScrollContainer.propTypes = {
  className: PropTypes.string,
};

ScrollContainer.defaultProps = {
  className: null,
};
