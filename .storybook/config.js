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

/* eslint-disable global-require */
configure(() => {
  require('../stories/UIKit.stories');
  require('../stories/components/index.stories');
  require('../stories/components/Button.stories');
  require('../stories/components/Input.stories');
  require('../stories/components/Textarea.stories');
  require('../stories/components/Autocomplete.stories');
  require('../stories/components/Checkbox.stories');
  require('../stories/components/Dialog.stories');
  require('../stories/components/Toast.stories');
  require('../stories/components/Tooltip.stories');
  require('../stories/fields/Playground.stories');
}, module);
