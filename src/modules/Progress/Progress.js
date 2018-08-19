import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withFormData } from '../Form';

import styles from './Progress.module.styl';

class Progress extends Component {
  static propTypes = {
    formData: PropTypes.shape({
      allowedRetries: PropTypes.number,
      currentTry: PropTypes.number,
    }),
    number: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
  };

  static defaultProps = {
    formData: null,
  };

  render() {
    const { number, total, formData } = this.props;
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
  }
}

export default withFormData(Progress);
