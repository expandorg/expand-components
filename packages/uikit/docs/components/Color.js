import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Color.module.styl';

export const Color = ({ name }) => (
  <div className={styles.container}>
    <div className={cn(styles.color, styles[name])} />
    <div className={styles.name}>{name}</div>
  </div>
);

Color.propTypes = {
  name: PropTypes.string.isRequired,
};

export const Group = ({ children }) => (
  <div className={styles.group}>{children}</div>
);
