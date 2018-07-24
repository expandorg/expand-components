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
  addonPanelInRight: true,
  sidebarAnimations: true,
});

/* eslint-disable global-require */
configure(() => {
  require('../stories/UIKit.stories');
  require('../stories/components/Button.stories');
  require('../stories/components/Input.stories');
  require('../stories/components/Checkbox.stories');
  require('../stories/components/Dialog.stories');
}, module);
