import React from 'react';

import { storiesOf } from '@storybook/react';

import { Kind, panelDecorator, Markdown } from '@gemsorg/uikit/stories/kit';

import Textarea from '../Textarea';

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
