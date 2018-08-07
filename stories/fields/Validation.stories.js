import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';

import { trivia } from './forms';

storiesOf('Form Builder', module).add('Validation', () => (
  <Panel>
    <Playground form={trivia} />
  </Panel>
));
