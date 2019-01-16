import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@expandorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground';

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

storiesOf('Form Builder/Modules', module).add('Multiselect', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" vertical />
  </Panel>
));
