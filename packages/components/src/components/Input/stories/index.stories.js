import React from 'react';

import { storiesOf } from '@storybook/react';

import { Kind, panelDecorator, Markdown } from '@expandorg/uikit/stories/kit';

import Input from '../Input';

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
