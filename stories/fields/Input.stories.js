import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/Input.md';

const form = {
  fields: [
    {
      name: 'text',
      type: 'text',
      placeholder: 'Simple text field',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password field',
    },
    {
      name: 'number',
      type: 'number',
      placeholder: 'Number field',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email field',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
    },
  ],
};

storiesOf('Form Builder/Fields', module).add('Input Fields', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
