import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../../src/components/Panel';

import Playground from '../Playground/Playground';
import Markdown from '../../kit/Markdown';
import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'video',
      type: 'video',
      src: 'http://media.gettyimages.com/videos/cap-video-id896606100',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Video', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
