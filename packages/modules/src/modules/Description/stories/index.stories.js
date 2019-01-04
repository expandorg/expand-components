import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@expandorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground'

import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'description',
      type: 'description',
      content:
        'Write a trivia question with three multiple-choice answers. One answer should be correct and fact-checked, and two answers should be incorrect',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Got it',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Description', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
