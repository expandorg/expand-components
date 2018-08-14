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
  'index',
  'Button',
  'Input',
  'Textarea',
  'Autocomplete',
  'Checkbox',
  'Dialog',
  'Toast',
  'Tooltip',
];


const moduleStories = [
  'index',

  'Input',
  'Select',
  'Multiselect',
  'Checkbox',
  'Article',
  'Title',
  'Paragraph',
  'Description',
  'Image',
  'Video',
  'Submit',
];

/* eslint-disable global-require */
configure(() => {
  require('../stories/general/index.stories');

  moduleStories.forEach(story => {
    require(`../stories/modules/${story}.stories`);
  })

  componentStories.forEach(story => {
    require(`../stories/components/${story}.stories`);
  })
}, module);
