import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Kind,
  panelDecorator,
  asUncontrolled,
  Markdown,
} from '@gemsorg/uikit/stories/kit';

import ControlledSwitch from '../Switch';

import readme from './readme.md';

const Switch = asUncontrolled(ControlledSwitch);

storiesOf('UI Components/Switch', module)
  .addDecorator(panelDecorator)
  .add('default', () => {
    const clicked = action('clicked');
    return (
      <div>
        <Kind title="Switch">
          <Switch onChange={clicked} />
        </Kind>
        <Markdown doc={readme} />
      </div>
    );
  });
