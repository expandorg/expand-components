import React from 'react';

import LinkTo from '@storybook/addon-links/react';
import { storiesOf } from '@storybook/react';

import panelDecorator from '@gemsorg/uikit/stories/kit/panelDecorator';
import Kind from '@gemsorg/uikit/stories/kit/Kind';
import Markdown from '@gemsorg/uikit/stories/kit/Markdown';

import styles from '@gemsorg/uikit/stories/styles.module.styl';

import readme from './Readme.md';

const components = [
  'Button',
  'Input',
  'Textarea',
  'Autocomplete',
  'Checkbox',
  'Dialog',
  'Toast',
  'Tooltip',
  'Switch',
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
