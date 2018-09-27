import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../../src/components/Panel';

import Playground from '../Playground/Playground';
// import Markdown from '../../kit/Markdown';

// import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'tag',
      type: 'tagVideo',
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
    {/* <Markdown doc={readme} /> */}
    <Playground form={form} editMode="hidden" vertical />
  </Panel>
));
