import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  Kind,
  panelDecorator,
  Toggle,
  Markdown,
} from '@gemsorg/uikit/stories/kit';

import styles from '@gemsorg/uikit/stories/styles.module.styl';
import { ToastAnimated } from '../index';

import readme from './readme.md';

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
