import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/Instructions.md';

const form = {
  modules: [
    {
      name: 'instructions',
      type: 'instructions',
      dialogs: [
        {
          action: 'See instructions',
          title: 'Instructions',
          content: 'Lorem ipsum dolor sit amet, consectetur',
        },
        {
          action: 'See Rules',
          title: 'Rules',
          content: 'Lorem ipsum dolor sit amet, consectetur',
        },
      ],
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Instructions', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
