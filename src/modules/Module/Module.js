import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moduleProps from './moduleProps';
import moduleControls from './moduleControls';

export default class Module extends Component {
  static propTypes = {
    module: moduleProps.isRequired,
    value: PropTypes.any, // eslint-disable-line
    isSubmitting: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    controls: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    value: undefined,
    controls: moduleControls,
  };

  render() {
    const {
      module,
      value,
      onChange,
      isSubmitting,
      onSubmit,
      controls,
    } = this.props;

    const Control = controls[module.type];
    if (!Control) {
      return null;
    }

    return (
      <Control
        {...module}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        isSubmitting={isSubmitting}
      />
    );
  }
}
