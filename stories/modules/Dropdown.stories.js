import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/Dropdown.md';

const form = {
  modules: [
    {
      name: 'description',
      type: 'description',
    },
    {
      name: 'dropdown',
      type: 'dropdown',
      placeholder: 'Select...',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Dropdown', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
