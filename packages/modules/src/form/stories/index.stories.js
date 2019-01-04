import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown, Kind } from '@expandorg/uikit/stories/kit';

import Playground from './Playground/Playground';

import readme from './Readme.md';
import validation from './Validation.md';

const trivia = {
  modules: [
    {
      name: 'description',
      type: 'description',
      content:
        'Write a trivia question with three multiple-choice answers. One answer should be correct and fact-checked, and two answers should be incorrect.',
    },
    {
      name: 'question',
      type: 'text',
      validation: {
        isRequired: 'Question is required',
      },
      placeholder: 'Question',
    },
    {
      name: 'correctAnswer',
      type: 'text',
      validation: {
        isRequired: 'correct answer is required',
      },
      placeholder: 'Correct Answer',
    },
    {
      name: 'incorrectAnswerA',
      type: 'text',
      placeholder: 'Optional Incorrect Answer',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
};

storiesOf('Form Builder', module)
  .add('Readme', () => (
    <Panel>
      <Markdown doc={readme} />
      <Playground form={trivia} />
    </Panel>
  ))
  .add('Validation', () => (
    <Panel>
      <Markdown doc={validation} />
      <Playground form={trivia} />
    </Panel>
  ))
  .add('Playground', () => (
    <Panel>
      <Kind title="Here you can build your own form">
        <Playground form={trivia} fullscreen vertical />
      </Kind>
    </Panel>
  ));
