import React from 'react';

import { storiesOf } from '@storybook/react';

import Kind from '../kit/Kind';
import Toggle from '../kit/Toggle';

import { ToastAnimated } from '../../src/components/Toast';

import styles from './styles.module.styl';

storiesOf('Components/Toast', module).add('default', () => (
  <Kind title="Toast">
    <Toggle title="Toggle toast">
      {visible => (
        <ToastAnimated visible={visible}>
          <div className={styles.toastContent}>Animated toast</div>
        </ToastAnimated>
      )}
    </Toggle>
  </Kind>
));
