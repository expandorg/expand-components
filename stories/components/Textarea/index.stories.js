import React from 'react';

import { storiesOf } from '@storybook/react';
import Kind from '../../kit/Kind';
import panelDecorator from '../../kit/panelDecorator';

import Textarea from '../../../src/components/Textarea';

import Markdown from '../../kit/Markdown';

import readme from './readme.md';

storiesOf('UI Components/Textarea', module)
  .addDecorator(panelDecorator)
  .add('default', () => (
    <div>
      <Kind title="Textarea">
        <Textarea placeholder="Type something..." />
      </Kind>
      <Markdown doc={readme} />
    </div>
  ));
