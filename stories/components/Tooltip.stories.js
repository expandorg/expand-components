import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Kind from '../kit/Kind';
import panelDecorator from '../kit/panelDecorator';

import SimpleButton from '../../src/components/Button';
import Tooltip from '../../src/components/Tooltip';

import Markdown from '../kit/Markdown';

import readme from './docs/Tooltip.md';

import styles from './styles.module.styl';

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
