import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../../src/components/Panel';

import Playground from '../Playground/Playground';
import Markdown from '../../kit/Markdown';
import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'regionSelect',
      type: 'regionSelect',
      image: 'https://pascal3.digipro.ru/images/.logo_detection/1591833.jpg',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('RegionSelect', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" vertical />
  </Panel>
));
