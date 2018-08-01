import React from 'react';

import { storiesOf } from '@storybook/react';

import Playground from './Playground/Playground';

import { trivia, input, article, checkbox } from './forms';

storiesOf('Fields', module)
  .add('Playground', () => (
    <Playground fullscreen form={trivia} title="Playground" />
  ))
  .add('Input Fields', () => (
    <Playground title="Input Fields" form={input} editMode="edit" />
  ))
  .add('Checkbox', () => (
    <Playground title="Checkbox" form={checkbox} editMode="edit" />
  ))
  .add('Article', () => (
    <Playground title="Article" form={article} editMode="edit" />
  ));
