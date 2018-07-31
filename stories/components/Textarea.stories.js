import React from 'react';

import { storiesOf } from '@storybook/react';
import Kind from '../kit/Kind';
import panelDecorator from '../kit/panelDecorator';

import Textarea from '../../src/components/Textarea';

storiesOf('Components/Textarea', module)
  .addDecorator(panelDecorator)
  .add('default', () => (
    <Kind title="Textarea">
      <Textarea placeholder="Type something..." />
    </Kind>
  ));
