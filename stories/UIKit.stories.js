import React from 'react';

import { storiesOf } from '@storybook/react';

import styles from './UIKit.stories.module.styl';

storiesOf('Gems UI', module)
  .add('Introduction', () => <div className={styles.container} />)
  .add('Colors', () => <div className={styles.container} />)
  .add('Typograpy', () => <div className={styles.container} />);
