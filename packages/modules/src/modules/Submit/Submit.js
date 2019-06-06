import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, VarsPlaceholder } from '@expandorg/components';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Submit.module.styl';

export default class Submit extends Component {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    isSubmitting: PropTypes.bool,
    isModulePreview: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isModulePreview: false,
    isSubmitting: false,
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
    const { caption, isSubmitting, onSubmit, isModulePreview } = this.props;
    return (
      <Button
        className={styles.submit}
        onClick={onSubmit}
        type="submit"
        disabled={isSubmitting}
      >
        {caption}
        <VarsPlaceholder
          vval={caption}
          isModulePreview={isModulePreview}
          pos="center"
        />
      </Button>
    );
  }
}
