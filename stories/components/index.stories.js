import React from 'react';
import LinkTo from '@storybook/addon-links/react';

import { storiesOf } from '@storybook/react';

import panelDecorator from '../kit/panelDecorator';
import Kind from '../kit/Kind';
import Markdown from '../kit/Markdown';

import readme from './Readme.md';

import styles from '../general/styles.module.styl';

const components = [
  'Button',
  'Input',
  'Textarea',
  'Autocomplete',
  'Checkbox',
  'Dialog',
  'Toast',
  'Tooltip',
];

storiesOf('UI Components', module)
  .addDecorator(panelDecorator)
  .add('Readme', () => (
    <div>
      <Kind title="Gems UI components">
        {components.map(component => (
          <LinkTo
            key={component}
            kind={`UI Components/${component}`}
            story="default"
            className={styles.link}
          >
            {component}
          </LinkTo>
        ))}
      </Kind>
      <Markdown doc={readme} />
    </div>
  ));
