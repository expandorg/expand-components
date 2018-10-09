import React from 'react';

import styles from './styles.module.styl';
import Markdown from './kit/Markdown';

import readme from '../../../README.md';

export default () => (
  <div className={styles.container}>
    <Markdown doc={readme} />
  </div>
);
