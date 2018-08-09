import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './styles.module.styl';

const Kind = ({ title, children, className }) => (
  <div className={cn(styles.kind, className)}>
    <div className={styles.kindName}>{title}</div>
    <div className={styles.kindContent}>{children}</div>
  </div>
);

Kind.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Kind.defaultProps = {
  className: null,
};

export default Kind;
