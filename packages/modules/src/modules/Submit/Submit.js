import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@gemsorg/components';

import Alignment from '../../components/Alignment';

import styles from './Submit.module.styl';

export default class Submit extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    justify: PropTypes.string,
    isSubmitting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    justify: 'left',
  };

  static module = {
    type: 'submit',
    editor: {
      defaults: {
        caption: 'Submit',
      },
    },
  };

  render() {
    const { caption, isSubmitting, onSubmit, justify } = this.props;
    return (
      <Alignment padding="medium" justify={justify}>
        <Button
          className={styles.submit}
          onClick={onSubmit}
          size="large"
          theme="pink"
          type="submit"
          disabled={isSubmitting}
        >
          {caption}
        </Button>
      </Alignment>
    );
  }
}
