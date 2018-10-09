import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.styl';

const Panel = ({ children, className }) => (
  <div className={cn(styles.panel, className)}>{children}</div>
);

Panel.propTypes = {
  className: PropTypes.string,
};

Panel.defaultProps = {
  className: null,
};

export default Panel;
