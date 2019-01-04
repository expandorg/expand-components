import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean } from '@storybook/addon-knobs/react';

import { Kind, panelDecorator, Markdown } from '@expandorg/uikit/stories/kit';

import styles from '@expandorg/uikit/stories/styles.module.styl';

import Button from '../Button';

import readme from './readme.md';

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
            <div className={styles.kind} key={s}>
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
