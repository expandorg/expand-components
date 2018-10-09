import React from 'react';

import styles from './styles.module.styl';

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
