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
  name: 'Gems.org UI Kit',
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


const fieldStories = [
  'Input',
  'Select',
  'Checkbox',
  'Article',
  'Title',
  'Paragraph',
  'Image',
  'Video',
  'Submit',
  'Validation',
];

/* eslint-disable global-require */
configure(() => {
  require('../stories/general/index.stories');

  require('../stories/fields/index.stories');

  fieldStories.forEach(story => {
    require(`../stories/fields/${story}.stories`);
  })
  require('../stories/fields/Playground.stories');

  componentStories.forEach(story => {
    require(`../stories/components/${story}.stories`);
  })
}, module);
