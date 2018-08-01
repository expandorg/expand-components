import React from 'react';

import { storiesOf } from '@storybook/react';

import Playground from './Playground/Playground';

import { trivia, input, article, checkbox, select } from './forms';

storiesOf('Fields', module)
  .add('Playground', () => (
    <Playground title="Playground" form={trivia} fullscreen />
  ))
  .add('Input Fields', () => (
    <Playground title="Input Fields" form={input} editMode="edit" />
  ))
  .add('Select', () => (
    <Playground title="Select" form={select} editMode="edit" />
  ))
  .add('Checkbox', () => (
    <Playground title="Checkbox" form={checkbox} editMode="edit" />
  ))
  .add('Article', () => (
    <Playground title="Article" form={article} editMode="edit" />
  ));
