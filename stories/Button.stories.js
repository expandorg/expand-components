import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';

import Button from '../src/components/Button';

const stories = storiesOf('Components/Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const disabled = boolean('Disabled', false);

  const themes = {
    none: 'none',
    pink: 'pink',
    white: 'white',
    transparent: 'transparent',
    aqua: 'aqua',
    blue: 'blue',
    link: 'link',
  };
  const theme = select('Theme', themes, 'none');
  const sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };

  const size = select('Size', sizes, 'medium');

  return (
    <Button
      onClick={action('clicked')}
      size={size}
      theme={theme}
      disabled={disabled}
    >
      Hello Button
    </Button>
  );
});
