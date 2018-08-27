import React from 'react';

import { storiesOf } from '@storybook/react';
import Kind from '../../kit/Kind';
import panelDecorator from '../../kit/panelDecorator';

import Input from '../../../src/components/Input';

import Markdown from '../../kit/Markdown';

import readme from './readme.md';

storiesOf('UI Components/Input', module)
  .addDecorator(panelDecorator)
  .add('default', () => (
    <div>
      <Kind title="Input">
        <Input placeholder="Type something..." />
      </Kind>
      <Markdown doc={readme} />
    </div>
  ));
