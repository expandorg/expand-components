import React, { Component } from 'react';

import Alignment from '../Alignment';

import styles from './Instructions.module.styl';

export default class Instructions extends Component {
  render() {
    const { children } = this.props;
    return (
      <Alignment padding="small">
        <div className={styles.actions}>{children}</div>
      </Alignment>
    );
  }
}
