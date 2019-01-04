import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@expandorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground'

import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'checkbox',
      type: 'checkbox',
      label: 'simple checkbox',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'I Agree',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Checkbox', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
