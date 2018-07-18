import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/button/Button';

storiesOf('Button - 2', module).add('with text', () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
));
