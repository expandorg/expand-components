import React from 'react';
import cn from 'classnames';

import Kind from './kit/Kind';

import styles from './styles.module.styl';

export default () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Typography</h1>
    <p className={styles.p}>Gems.org font presets:</p>
    <div className={styles.frame}>
      <Kind title="headline — 24px, 1.3, 400">
        <div className={cn(styles.font, styles.headline)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="title — 20px, 1.4, 500">
        <div className={cn(styles.font, styles.title)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="menu — 18px, 1.4, 400">
        <div className={cn(styles.font, styles.menu)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="subheader — 16px, 1.4, 400">
        <div className={cn(styles.font, styles.subheader)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="normal — 14px, 1.4 400">
        <div className={cn(styles.font, styles.normal)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
      <Kind title="body — 13px 1.4, 400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        <div className={cn(styles.font, styles.body)} />
      </Kind>
      <Kind title="caption — 12px, 1.3, 400">
        <div className={cn(styles.font, styles.caption)}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </div>
      </Kind>
    </div>
  </div>
);
