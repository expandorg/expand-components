import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/Paragraph.md';

const form = {
  modules: [
    {
      name: 'paragraph',
      type: 'paragraph',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Got it',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Paragraph', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
