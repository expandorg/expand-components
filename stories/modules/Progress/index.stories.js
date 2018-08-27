import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../../src/components/Panel';

import Playground from '../Playground/Playground';
import Markdown from '../../kit/Markdown';
import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'progress',
      type: 'progress',
      number: 3,
      total: 5,
    },
    {
      name: 'article',
      type: 'article',
      title: 'Article title',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Progress', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
