import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import Kind from '../kit/Kind';
import Markdown from '../kit/Markdown';
import panelDecorator from '../kit/panelDecorator';

import Button from '../../src/components/Button';

import readme from './docs/Button.md';

import styles from './styles.module.styl';

const themes = ['pink', 'white', 'transparent', 'aqua', 'blue', 'link'];
const sizes = ['small', 'medium', 'large'];

const stories = storiesOf('UI Components/Button', module)
  .addDecorator(panelDecorator)
  .addDecorator(withKnobs);

themes.forEach(theme => {
  stories.add(theme, () => {
    const disabled = boolean('Disabled', false);
    return (
      <div>
        <Kind title="Button">
          {sizes.map(s => (
            <div className={styles.kind}>
              <div className={styles.h2}>{s}</div>
              <div>
                <Button
                  onClick={action('clicked')}
                  theme={theme}
                  size={s}
                  disabled={disabled}
                >
                  Hello Button
                </Button>
              </div>
            </div>
          ))}
        </Kind>
        <Markdown doc={readme} />
      </div>
    );
  });
});
