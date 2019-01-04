import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@expandorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground'

import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'image',
      type: 'image',
      src: 'https://portal.expand.org/images/complete-tasks.png',
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
