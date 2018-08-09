import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/Checkbox.md';

const form = {
  fields: [
    {
      name: 'checkbox',
      type: 'checkbox',
      validation: ['isRequired'],
      label: 'simple checkbox',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'I Agree',
    },
  ],
};

storiesOf('Form Builder/Fields', module).add('Checkbox', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
