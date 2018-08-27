import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../../src/components/Panel';

import Playground from '../Playground/Playground';
import Markdown from '../../kit/Markdown';
import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'image',
      type: 'image',
      src: 'https://portal.gems.org/images/complete-tasks.png',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Image', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
