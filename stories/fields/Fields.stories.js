import React from 'react';

import { storiesOf } from '@storybook/react';

import Panel from '../../src/components/Panel';

import Playground from './Playground/Playground';

import { input, article, checkbox, select, video } from './forms';

storiesOf('Form Builder/Fields', module)
  .add('Input Fields', () => (
    <Panel>
      <Playground form={input} editMode="edit" />
    </Panel>
  ))
  .add('Select', () => (
    <Panel>
      <Playground form={select} editMode="edit" />
    </Panel>
  ))
  .add('Checkbox', () => (
    <Panel>
      <Playground form={checkbox} editMode="edit" />
    </Panel>
  ))
  .add('Article', () => (
    <Panel>
      <Playground form={article} editMode="edit" />
    </Panel>
  ))
  .add('Video', () => (
    <Panel>
      <Playground form={video} editMode="edit" />
    </Panel>
  ));
