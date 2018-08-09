import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';

import readme from './docs/Submit.md';

const form = {
  fields: [
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'left',
    },
  ],
};

storiesOf('Form Builder/Fields', module).add('Submit', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
