import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import '../packages/uikit/layout.styl'

import Container from '../packages/uikit/stories/kit/Container'

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


configure(() => {
  require('../packages/uikit/stories/index.stories');

  require(`../packages/modules/src/form/stories/index.stories`);

  require('../packages/modules/src/modules/Agreement/stories/index.stories');
  require('../packages/modules/src/modules/Article/stories/index.stories');
  require('../packages/modules/src/modules/Checkbox/stories/index.stories');
  require('../packages/modules/src/modules/ClipboardText/stories/index.stories');
  require('../packages/modules/src/modules/Collapsable/stories/index.stories');
  require('../packages/modules/src/modules/Description/stories/index.stories');
  require('../packages/modules/src/modules/Dropdown/stories/index.stories');
  require('../packages/modules/src/modules/Image/stories/index.stories');
  require('../packages/modules/src/modules/Input/stories/index.stories');
  require('../packages/modules/src/modules/Instructions/stories/index.stories');
  require('../packages/modules/src/modules/Select/stories/Multiselect.stories');
  require('../packages/modules/src/modules/Paragraph/stories/index.stories');
  require('../packages/modules/src/modules/Progress/stories/index.stories');
  require('../packages/modules/src/modules/Question/stories/index.stories');
  require('../packages/modules/src/modules/RegionSelect/stories/RegionMultiselect.stories');
  require('../packages/modules/src/modules/RegionSelect/stories/RegionSelect.stories');
  require('../packages/modules/src/modules/ImageTiles/stories/index.stories');
  require('../packages/modules/src/modules/Select/stories/Select.stories');
  require('../packages/modules/src/modules/Submit/stories/index.stories');
  require('../packages/modules/src/modules/Title/stories/index.stories');
  require('../packages/modules/src/modules/TagVideo/stories/TagVideo.stories');
  require('../packages/modules/src/modules/TagVideo/stories/MultipleTagVideo.stories');
  require('../packages/modules/src/modules/Video/stories/index.stories');

  require('../packages/modules/src/form/stories/examples/Video.stories');
  require('../packages/modules/src/form/stories/examples/Trivia.stories');


  require(`../packages/components/stories/index.stories`);

  require(`../packages/components/src/components/Autocomplete/stories/index.stories`);
  require(`../packages/components/src/components/Button/stories/index.stories`);
  require(`../packages/components/src/components/Checkbox/stories/index.stories`);
  require(`../packages/components/src/components/Dialog/stories/index.stories`);
  require(`../packages/components/src/components/Input/stories/index.stories`);
  require(`../packages/components/src/components/Textarea/stories/index.stories`);
  require(`../packages/components/src/components/Toast/stories/index.stories`);
  require(`../packages/components/src/components/Tooltip/stories/index.stories`);
  require(`../packages/components/src/components/Switch/stories/index.stories`);


}, module);
