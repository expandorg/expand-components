import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Kind from '../kit/Kind';

import FormSequence from './FormSequence/FormSequence';

const forms = [
  {
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
  },
  {
    modules: [
      {
        name: 'article',
        type: 'article',
        title: 'Thank you',
        content: 'Thank you for participating',
      },
    ],
  },
];

storiesOf('Form Builder/Examples', module).add('Trivia', () => (
  <Panel>
    <Kind title="Simple trivia task">
      <FormSequence forms={forms} />
    </Kind>
  </Panel>
));
