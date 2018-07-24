import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.styl';

const Kind = ({ title, children }) => (
  <div className={styles.kind}>
    <div className={styles.kindName}>{title}</div>
    <div className={styles.kindContent}>{children}</div>
  </div>
);

Kind.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Kind;
