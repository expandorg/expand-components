import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Kind from '../kit/Kind';
import Playground from './Playground/Playground';

import trivia from './trivia';

storiesOf('Form Builder', module).add('Playground', () => (
  <Panel>
    <Kind title="Here you can build your own form">
      <Playground form={trivia} fullscreen />
    </Kind>
  </Panel>
));
