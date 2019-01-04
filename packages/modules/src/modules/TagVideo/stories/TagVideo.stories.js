import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@expandorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground'

import readme from './TagVideo.md';

const form = {
  modules: [
    {
      name: 'tag',
      type: 'tagVideo',
      options: [
        'Movement1',
        'Movement2',
        'Movement3',
        'Movement4',
        'Movement5',
        'Movement7',
        'Movement8',
        'Movement9',
      ],
      src: ' https://www.youtube.com/watch?v=PXi3Mv6KMzY',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('TagVideo', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" vertical />
  </Panel>
));
