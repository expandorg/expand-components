import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@gemsorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground'

import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'instructions',
      type: 'instructions',
      modules: [
        {
          name: 'See instructions',
          type: 'instructionsItem',
          action: 'See instructions',
          title: 'Instructions',
          modules: {
            name: 'paragraph',
            type: 'paragraph',
            content: 'Lorem ipsum dolor sit amet, consectetur',
          },
        },
        {
          name: 'See Rules',
          type: 'instructionsItem',
          action: 'See Rules',
          title: 'Rules',
          modules: {
            name: 'paragraph',
            type: 'paragraph',
            content: 'Lorem ipsum dolor sit amet, consectetur',
          },
        },
      ],
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Instructions', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
