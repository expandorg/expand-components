import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../components/Button/Button';
import { fieldProps } from './propTypes';

import Alignment from './ui/Alignment';

export default class Submit extends Component {
  static propTypes = {
    field: PropTypes.shape(fieldProps).isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { field, isSubmitting, onSubmit } = this.props;
    return (
      <Alignment padding="small">
        <Button
          onClick={onSubmit}
          size="large"
          theme="pink"
          type="submit"
          disabled={isSubmitting}
        >
          {field.caption}
        </Button>
      </Alignment>
    );
  }
}
