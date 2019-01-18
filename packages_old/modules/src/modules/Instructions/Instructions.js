import React, { Component } from 'react';

import Alignment from '../../components/Alignment';

import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Instructions.module.styl';

export default class Instructions extends Component {
  static module = {
    type: 'instructions',
    name: 'Instructions',
    editor: {
      category: ModuleCategories.Display,
      defaults: {
        modules: [
          {
            type: 'instructionsItem',
            action: 'See instructions',
            title: 'Instructions',
            modules: {
              type: 'paragraph',
              content: 'Lorem ipsum dolor sit amet, consectetur',
            },
          },
          {
            type: 'instructionsItem',
            action: 'See Rules',
            title: 'Rules',
            modules: {
              type: 'paragraph',
              content: 'Lorem ipsum dolor sit amet, consectetur',
            },
          },
        ],
      },
    },
  };

  render() {
    const { children } = this.props;
    return (
      <Alignment padding="small">
        <div className={styles.actions}>{children}</div>
      </Alignment>
    );
  }
}
