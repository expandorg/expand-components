import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@expandorg/components';

import Alignment from '../../components/Alignment';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

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
    name: 'Submit button',
    editor: {
      category: ModuleCategories.Input,
      properties: {
        caption: {
          type: PropControlTypes.string,
          placeholder: 'Button caption',
          required: true,
        },
        justify: {
          type: PropControlTypes.enum,
          label: 'justify button',
          options: ['left', 'right', 'center'],
          default: 'left',
        },
      },
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
