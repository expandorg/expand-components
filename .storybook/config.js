import React from 'react';
import { configure, addDecorator } from '@storybook/react';

addDecorator(story => (
  <div>
    {story()}
  </div>
));

/* eslint-disable global-require */
configure(() => {
  require('../stories/index.stories');
  require('../stories/Button.stories');
  require('../stories/Input.stories');
}, module);
