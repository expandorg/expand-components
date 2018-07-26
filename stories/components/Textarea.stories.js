import React from 'react';

import { storiesOf } from '@storybook/react';
import Kind from '../kit/Kind';

import Textarea from '../../src/components/Textarea';

storiesOf('Components/Textarea', module).add('default', () => (
  <Kind title="Textarea">
    <Textarea placeholder="Type something..." />
  </Kind>
));
