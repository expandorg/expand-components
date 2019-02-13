import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moduleProps from './moduleProps';

export default class Module extends Component {
  static propTypes = {
    module: moduleProps.isRequired,
    value: PropTypes.any, // eslint-disable-line
    isSubmitting: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onModuleError: PropTypes.func,
    onNotify: PropTypes.func,
    controls: PropTypes.object.isRequired, // eslint-disable-line
  };

  static defaultProps = {
    value: undefined,
    onChange: Function.prototype,
    onSubmit: Function.prototype,
    onNotify: Function.prototype,
    onModuleError: Function.prototype,
  };

  renderModules = modules => {
    const { controls, isSubmitting, onModuleError, onNotify } = this.props;
    if (!Array.isArray(modules)) {
      return (
        <Module
          onModuleError={onModuleError}
          module={modules}
          controls={controls}
          onNotify={onNotify}
          isSubmitting={isSubmitting}
        />
      );
    }
    return modules.map(module => (
      <Module
        key={module.name}
        onModuleError={onModuleError}
        onNotify={onNotify}
        module={module}
        controls={controls}
        isSubmitting={isSubmitting}
      />
    ));
  };

  render() {
    const {
      module,
      value,
      onChange,
      isSubmitting,
      onSubmit,
      onModuleError,
      onNotify,
      controls,
    } = this.props;

    const Control = controls[module.type];

    if (!Control) {
      return null;
    }
    if (typeof module.modules !== 'undefined') {
      const { modules, ...rest } = module;

      return (
        <Control
          renderModules={this.renderModules}
          value={value}
          onModuleError={onModuleError}
          onChange={onChange}
          onNotify={onNotify}
          {...rest}
        >
          {this.renderModules(modules)}
        </Control>
      );
    }

    return (
      <Control
        {...module}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        onModuleError={onModuleError}
        isSubmitting={isSubmitting}
        onNotify={onNotify}
        renderModules={this.renderModules}
      />
    );
  }
}
