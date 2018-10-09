import React from 'react';

import { Tooltip } from '@gemsorg/components';

import styles from './Choice.module.styl';

const Hint = Tooltip(({ children, ...rest }) => (
  <span className={styles.hint} {...rest}>
    <span className={styles.q}>?</span>
    {children}
  </span>
));

export default Hint;
