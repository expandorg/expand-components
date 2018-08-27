import React from 'react';

import { storiesOf } from '@storybook/react';

import Kind from '../../kit/Kind';
import Toggle from '../../kit/Toggle';
import panelDecorator from '../../kit/panelDecorator';

import { ToastAnimated } from '../../../src/components/Toast';

import Markdown from '../../kit/Markdown';

import readme from './readme.md';

import styles from '../styles.module.styl';

storiesOf('UI Components/Toast', module)
  .addDecorator(panelDecorator)
  .add('default', () => (
    <div>
      <Kind title="Toast">
        <Toggle title="Toggle toast">
          {visible => (
            <ToastAnimated visible={visible}>
              <div className={styles.toastContent}>Animated toast</div>
            </ToastAnimated>
          )}
        </Toggle>
      </Kind>
      <Markdown doc={readme} />
    </div>
  ));
