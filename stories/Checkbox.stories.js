import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import WithState from './WithState';
import Checkbox from '../src/components/Checkbox';

const stories = storiesOf('Components/Checkbox', module);

stories.add('default', () => {
  const clicked = action('clicked');
  return (
    <WithState initial={false}>
      {({ value, onChange }) => (
        <Checkbox
          value={value}
          onChange={edited => {
            onChange(edited);
            clicked(edited);
          }}
          name="test"
          label="Click me"
        />
      )}
    </WithState>
  );
});
