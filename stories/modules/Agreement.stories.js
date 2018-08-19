import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/Agreement.md';

const form = {
  modules: [
    {
      name: 'agreement',
      type: 'agreement',
      button: 'Rules',
      label: 'I Agree',
      headline: 'question title',
      modules: {
        name: 'p',
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet, consectetur',
      },
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Agreement', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
