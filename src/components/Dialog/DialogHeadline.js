import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

const DialogHeadline = ({ children, className }) => (
  <div className={cn('gem-dialog-headline', className)}>{children}</div>
);

DialogHeadline.propTypes = {
  className: PropTypes.string,
};

DialogHeadline.defaultProps = {
  className: null,
};

export default DialogHeadline;
