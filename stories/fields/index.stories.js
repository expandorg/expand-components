import React from 'react';

import { storiesOf } from '@storybook/react';

import panelDecorator from '../kit/panelDecorator';
import Markdown from '../kit/Markdown';

import Playground from './Playground/Playground';

import readme from './docs/Readme.md';

import { trivia } from './forms';

storiesOf('Form Builder', module)
  .addDecorator(panelDecorator)
  .add('Readme', () => (
    <div>
      <Markdown doc={readme} />
      <Playground form={trivia} />
    </div>
  ));
