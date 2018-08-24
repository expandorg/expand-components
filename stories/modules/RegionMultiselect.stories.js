import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';
import Markdown from '../kit/Markdown';
import readme from './docs/RegionSelect.md';

const form = {
  modules: [
    {
      name: 'regionMultiselect',
      type: 'regionMultiselect',
      image: 'https://pascal3.digipro.ru/images/.logo_detection/1591833.jpg',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('RegionMultiselect', () => (
  <Panel>
    <Markdown doc={readme} />
    <Playground form={form} editMode="edit" vertical />
  </Panel>
));
