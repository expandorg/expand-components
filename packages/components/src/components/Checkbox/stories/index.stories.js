import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Kind,
  panelDecorator,
  asUncontrolled,
  Markdown,
} from '@gemsorg/uikit/stories/kit';

import ControlledCheckbox from '../Checkbox';

import readme from './readme.md';

const Checkbox = asUncontrolled(ControlledCheckbox);

storiesOf('UI Components/Checkbox', module)
  .addDecorator(panelDecorator)
  .add('default', () => {
    const clicked = action('clicked');
    return (
      <div>
        <Kind title="Checkbox">
          <Checkbox name="test" label="Checkbox label" onChange={clicked} />
        </Kind>
        <Markdown doc={readme} />
      </div>
    );
  });
