import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/Question.md';

const form = {
  modules: [
    {
      name: 'question',
      type: 'question',
      title: 'Question #1',
      content: 'What effects were used in this video?',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Got it',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Question', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
