import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Kind from '../kit/Kind';
import asUncontrolled from '../kit/asUncontrolled';
import panelDecorator from '../kit/panelDecorator';

import ControlledCheckbox from '../../src/components/Checkbox';

import Markdown from '../kit/Markdown';

import readme from './docs/Checkbox.md';

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
