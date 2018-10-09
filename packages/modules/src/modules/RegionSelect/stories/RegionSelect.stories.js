import React from 'react';

import { storiesOf } from '@storybook/react';

import { Panel, Markdown } from '@gemsorg/uikit/stories/kit';
import Playground from '../../../form/stories/Playground/Playground'

import readme from './RegionSelect.md';

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
