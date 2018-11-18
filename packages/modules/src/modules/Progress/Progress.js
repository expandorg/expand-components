import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FormData } from '../../form/Form';

import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Progress.module.styl';

export default class Progress extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  };

  static module = {
    type: 'progress',
    name: 'QA Progress',
    editor: {
      catogory: ModuleCategories.Onboarding,
      defaults: {
        number: 1,
        total: 2,
      },
    },
  };

  render() {
    const { number, total } = this.props;

    return (
      <FormData>
        {({ formData }) => {
          if (!formData) {
            return null;
          }
          const { allowedRetries, currentTry } = formData;
          const triesLeft = (+allowedRetries || 0) - (+currentTry || 0);

          return (
            <div className={styles.container}>
              <div className={styles.block}>
                Question
                <span className={styles.number}>
                  {number} / {total}
                </span>
              </div>
              <div className={styles.block}>
                <span className={styles.number}>{triesLeft}</span>
                Tries left
              </div>
            </div>
          );
        }}
      </FormData>
    );
  }
}
