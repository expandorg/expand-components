import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/Checkbox.md';

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
