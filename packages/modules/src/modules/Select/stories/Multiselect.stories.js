import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@gemsorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground'

import readme from './Multiselect.md';

const form = {
  modules: [
    {
      name: 'description',
      type: 'description',
      content: 'Select many',
    },
    {
      name: 'multiselect',
      type: 'multiselect',
      columns: 3,
      options: [
        { value: 'A', id: 'A', caption: 'Option 1', hint: 'Option 1' },
        { value: 'b', id: 'b', caption: 'Option 2', hint: 'Option 1' },
        { value: '3', id: '3', caption: 'Option 2', hint: 'Option 1' },
        {
          value: 'IV',
          id: 'IV',
          caption: 'Option 4 with long text',
          hint: 'Option 4 with long text',
        },
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

storiesOf('Form Builder/Modules', module).add('Multiselect', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" vertical />
  </Panel>
));
