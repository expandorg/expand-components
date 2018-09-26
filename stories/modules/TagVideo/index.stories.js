import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../../src/components/Panel';

import Playground from '../Playground/Playground';
// import Markdown from '../../kit/Markdown';

// import readme from './readme.md';

const form = {
  modules: [
    {
      name: 'tag',
      type: 'tagVideo',
      src: ' http://127.0.0.1:8080/Ozark.S02E01.WEBRip.720p.BaibaKo.mkv',
    },
    {
      name: 'submit',
      type: 'submit',
      caption: 'Next',
      justify: 'center',
    },
  ],
};

storiesOf('Form Builder/Modules', module).add('TagVideo', () => (
  <Panel>
    {/* <Markdown doc={readme} /> */}
    <Playground form={form} editMode="hidden" vertical />
  </Panel>
));
