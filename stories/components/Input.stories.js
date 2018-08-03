import React from 'react';

import { storiesOf } from '@storybook/react';
import Kind from '../kit/Kind';
import panelDecorator from '../kit/panelDecorator';

import Input from '../../src/components/Input';
import ErrorMessage from '../../src/components/ErrorMessage';

import Markdown from '../kit/Markdown';

import readme from './docs/Input.md';

storiesOf('Components/Input', module)
  .addDecorator(panelDecorator)
  .add('default', () => (
    <div>
      <Kind title="Input">
        <Input placeholder="Type something..." />
      </Kind>
      <Markdown doc={readme} />
    </div>
  ))
  .add('with error', () => (
    <div>
      <Kind title="Input with error message">
        <Input placeholder="Type something..." />
        <ErrorMessage error={{ commonMessage: 'some error message' }} />
      </Kind>
      <Markdown doc={readme} />
    </div>
  ));
