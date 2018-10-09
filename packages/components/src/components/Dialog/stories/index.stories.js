import React from 'react';

import { storiesOf } from '@storybook/react';

import {
  Kind,
  panelDecorator,
  Markdown,
  Toggle,
} from '@gemsorg/uikit/stories/kit';

import styles from '@gemsorg/uikit/stories/styles.module.styl';

import readme from './readme.md';

import { Dialog, DialogHeadline, setAppElement } from '../index';

setAppElement(document.getElementById('root'));

storiesOf('UI Components/Dialog', module)
  .addDecorator(panelDecorator)
  .add('default', () => (
    <div>
      <Kind title="Dialog">
        <Toggle title="Toggle dialog">
          {(visible, onToggle) => (
            <Dialog onHide={onToggle} visible={visible} contentLabel="test">
              <DialogHeadline>Dialog header</DialogHeadline>
              <div className={styles.dialogContent}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </Dialog>
          )}
        </Toggle>
      </Kind>
      <Markdown doc={readme} />
    </div>
  ));
