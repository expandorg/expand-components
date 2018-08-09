import React from 'react';
import cn from 'classnames';

import Kind from '../kit/Kind';

import styles from './styles.module.styl';

export default () => (
  <div className={styles.container}>
    <h1 className={styles.header}>Colors</h1>
    <Kind title="Base Colors" className={styles.frame}>
      <div className={styles.colors}>
        <div className={cn(styles.color, styles.pink)}>color-pink</div>
        <div className={cn(styles.color, styles.pinkLight)}>
          color-pink-light
        </div>
        <div className={cn(styles.color, styles.aqua)}>color-aqua</div>
        <div className={cn(styles.color, styles.aquaLight)}>
          color-aqua-light
        </div>
        <div className={cn(styles.color, styles.blue)}>color-blue</div>
      </div>
    </Kind>
    <Kind title="Text Colors" className={styles.frame}>
      <div className={styles.colors}>
        <div className={cn(styles.color, styles.text1)}>color-text-1</div>
        <div className={cn(styles.color, styles.textGray1)}>
          color-text-gray-1
        </div>
      </div>
    </Kind>
    <Kind title="Grayscale" className={styles.frame}>
      <div className={styles.colors}>
        <div className={cn(styles.color, styles.black)}>color-black</div>
        <div className={cn(styles.color, styles.borderGray)}>
          color-border-grey
        </div>
        <div className={cn(styles.color, styles.gray)}>color-gray</div>
        <div className={cn(styles.color, styles.white)}>color-white</div>
      </div>
    </Kind>
  </div>
);
