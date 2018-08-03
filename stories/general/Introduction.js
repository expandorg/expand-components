import React from 'react';
import LinkTo from '@storybook/addon-links/react';

import Kind from '../kit/Kind';

import styles from './styles.module.styl';

export default () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Gems Component library</h1>
    <Kind title="Ui Kit">
      <LinkTo kind="Gems UI" story="Colors" className={styles.link}>
        Colors
      </LinkTo>
      <LinkTo kind="Gems UI" story="Typography" className={styles.link}>
        Typography
      </LinkTo>
    </Kind>
    <Kind title="Fields">
      <LinkTo kind="Fields" story="Playground" className={styles.link}>
        Playground
      </LinkTo>
    </Kind>
  </div>
);
