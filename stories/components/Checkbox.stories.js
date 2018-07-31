import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Kind from '../kit/Kind';
import asUncontrolled from '../kit/asUncontrolled';
import panelDecorator from '../kit/panelDecorator';

import ControlledCheckbox from '../../src/components/Checkbox';

const Checkbox = asUncontrolled(ControlledCheckbox);

storiesOf('Components/Checkbox', module)
  .addDecorator(panelDecorator)
  .add('default', () => {
    const clicked = action('clicked');
    return (
      <Kind title="Checkbox">
        <Checkbox name="test" label="Checkbox label" onChange={clicked} />
      </Kind>
    );
  });
