import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import Kind from '../kit/Kind';

import Button from '../../src/components/Button';

const themes = ['pink', 'white', 'transparent', 'aqua', 'blue', 'link'];
const sizes = ['small', 'medium', 'large'];

const stories = storiesOf('Components/Button', module).addDecorator(withKnobs);

themes.forEach(theme => {
  stories.add(theme, () => {
    const disabled = boolean('Disabled', false);
    return (
      <div>
        {sizes.map(s => (
          <Kind title={s} key={s}>
            <Button
              onClick={action('clicked')}
              theme={theme}
              size={s}
              disabled={disabled}
            >
              Hello Button
            </Button>
          </Kind>
        ))}
      </div>
    );
  });
});
