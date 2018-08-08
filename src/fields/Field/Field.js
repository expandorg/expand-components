import React, { Component } from 'react';
import PropTypes from 'prop-types';

import fieldProps from './fieldProps';
import fieldControls from './fieldControls';

export default class Field extends Component {
  static propTypes = {
    field: fieldProps.isRequired,
    value: PropTypes.any, // eslint-disable-line
    isSubmitting: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    controls: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    value: undefined,
    controls: fieldControls,
  };

  render() {
    const {
      field,
      value,
      onChange,
      isSubmitting,
      onSubmit,
      controls,
    } = this.props;

    const Control = controls[field.type];
    if (!Control) {
      return null;
    }

    return (
      <Control
        {...field}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    );
  }
}
