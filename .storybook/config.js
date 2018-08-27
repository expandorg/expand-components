import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import '../stories/kit/layout.styl'

import Container from '../stories/kit/Container'

addDecorator((story) => (
  <Container>
    {story()}
  </Container>
));

setOptions({
  name: 'Gems',
  url: 'https://github.com/gemsorg/gems-components',
  // addonPanelInRight: true,
  sidebarAnimations: true,
  showAddonPanel: false,
});

const componentStories = [
  'Autocomplete',
  'Button',
  'Checkbox',
  'Dialog',
  'Input',
  'Textarea',
  'Toast',
  'Tooltip',
];


const moduleStories = [
  'Agreement',
  'Article',
  'Checkbox',
  'Collapsable',
  'Description',
  'Dropdown',
  'Image',
  'Input',
  'Instructions',
  'Multiselect',
  'Paragraph',
  'Progress',
  'Question',
  'RegionMultiselect',
  'RegionSelect',
  'Select',
  'Submit',
  'Title',
  'Video',
];

const examplesStories = [
  'Video',
  'Trivia',
]

/* eslint-disable global-require */
configure(() => {
  require('../stories/general/index.stories');

  require(`../stories/modules/index.stories`);

  moduleStories.forEach(story => {
    require(`../stories/modules/${story}/index.stories`);
  })

  examplesStories.forEach(story => {
    require(`../stories/examples/${story}.stories`);
  })

  require(`../stories/components/index.stories`);

  componentStories.forEach(story => {
    require(`../stories/components/${story}/index.stories`);
  })

}, module);
