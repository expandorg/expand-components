import React from 'react';

import { storiesOf } from '@storybook/react';

import Kind from '../kit/Kind';
import panelDecorator from '../kit/panelDecorator';

import Playground from './Playground/Playground';

storiesOf('Fields', module)
  .addDecorator(panelDecorator)
  .add('Playground', () => (
    <Kind title="Playground">
      <Playground />
    </Kind>
  ));
