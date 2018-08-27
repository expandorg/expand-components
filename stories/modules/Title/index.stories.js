import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../../src/components/Panel';

import Playground from '../Playground/Playground';
import Markdown from '../../kit/Markdown';
import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'title',
      type: 'title',
      title: 'Article title',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Got it',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Title', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
