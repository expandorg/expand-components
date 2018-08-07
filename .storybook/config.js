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

const stories = [
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

/* eslint-disable global-require */
configure(() => {
  require('../stories/general/index.stories');

  require('../stories/fields/index.stories');
  require('../stories/fields/Playground.stories');
  require('../stories/fields/Fields.stories');
  require('../stories/fields/Validation.stories');

  stories.forEach(story => {
    require(`../stories/components/${story}.stories`);
  })
}, module);
