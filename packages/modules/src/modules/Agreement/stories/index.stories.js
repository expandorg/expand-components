import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@gemsorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground';

import readme from './readme.md';

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
