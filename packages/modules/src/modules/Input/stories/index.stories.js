import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@gemsorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground';

import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'text',
      type: 'input',
      inputType: 'text',
      label: 'Label',
      placeholder: 'Simple text',
    },
    {
      name: 'password',
      type: 'input',
      inputType: 'password',
      label: 'Password',
      placeholder: 'Password',
    },
    {
      name: 'number',
      type: 'input',
      inputType: 'number',
      placeholder: 'Number',
    },
    {
      name: 'email',
      type: 'input',
      inputType: 'email',
      placeholder: 'Email',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('Input', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" />
  </Panel>
));
