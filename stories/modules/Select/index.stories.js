import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../../src/components/Panel';

import Playground from '../Playground/Playground';
import Markdown from '../../kit/Markdown';
import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'description',
      type: 'description',
      content: 'Select one',
    },
    {
      name: 'select',
      type: 'select',
      options: [
        { value: 'A', id: 'A', caption: 'Option 1' },
        { value: 'b', id: 'b', caption: 'Option 2' },
        { value: '3', id: '3', caption: 'Option 2' },
        { value: 'IV', id: 'IV', caption: 'Option 4', hint: 'Hint tooltip' },
      ],
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Select', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" vertical />
  </Panel>
));
