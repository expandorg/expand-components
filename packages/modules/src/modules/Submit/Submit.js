import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@expandorg/components';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Submit.module.styl';

export default class Submit extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  static module = {
    type: 'submit',
    name: 'Submit button',
    editor: {
      category: ModuleCategories.Input,
      properties: {
        caption: {
          type: PropControlTypes.string,
          placeholder: 'Button caption',
          required: true,
        },
      },
      defaults: {
        caption: 'Submit',
      },
    },
  };

  render() {
    const { caption, isSubmitting, onSubmit } = this.props;
    return (
      <Button
        className={styles.submit}
        onClick={onSubmit}
        type="submit"
        disabled={isSubmitting}
      >
        {caption}
      </Button>
    );
  }
}
