import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Kind from '../../kit/Kind';
import asUncontrolled from '../../kit/asUncontrolled';
import panelDecorator from '../../kit/panelDecorator';

import ControlledSwitch from '../../../src/components/Switch';

import Markdown from '../../kit/Markdown';

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
