import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Kind, panelDecorator, Markdown } from '@gemsorg/uikit/stories/kit';

import styles from '@gemsorg/uikit/stories/styles.module.styl';

import SimpleButton from '../../Button';
import Tooltip from '../Tooltip';

import readme from './readme.md';

const Button = Tooltip(SimpleButton);

storiesOf('UI Components/Tooltip', module)
  .addDecorator(panelDecorator)
  .add('default', () => {
    const clicked = action('click');
    return (
      <div>
        <Kind title="Tooltip top">
          <Button
            className={styles.relative}
            tooltip="This is a tooltip"
            theme="white"
            onClick={clicked}
          >
            Hover to see tooltip
          </Button>
        </Kind>
        <Kind title="Tooltip bottom">
          <Button
            className={styles.relative}
            tooltip="This is a tooltip"
            tooltipOrientation="bottom"
            theme="white"
            onClick={clicked}
          >
            Hover to see tooltip
          </Button>
        </Kind>
        <Markdown doc={readme} />
      </div>
    );
  });
