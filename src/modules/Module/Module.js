import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moduleProps from './moduleProps';
import moduleControls from './moduleControls';

export default class Module extends Component {
  static propTypes = {
    module: moduleProps.isRequired,
    value: PropTypes.any, // eslint-disable-line
    isSubmitting: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    controls: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    value: undefined,
    controls: moduleControls,
    onChange: Function.prototype,
    onSubmit: Function.prototype,
  };

  renderChildren(children) {
    const { controls, isSubmitting } = this.props;
    if (!Array.isArray(children)) {
      return (
        <Module
          module={children}
          controls={controls}
          isSubmitting={isSubmitting}
        />
      );
    }
    return children.map(module => (
      <Module
        key={module.name}
        module={module}
        controls={controls}
        isSubmitting={isSubmitting}
      />
    ));
  }

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
    if (typeof module.children !== 'undefined') {
      const { children, ...rest } = module;
      return (
        <Control value={value} onChange={onChange} {...rest}>
          {this.renderChildren(children)}
        </Control>
      );
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
