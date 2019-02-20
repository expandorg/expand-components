import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moduleProps from './moduleProps';

export default class Module extends Component {
  static propTypes = {
    module: moduleProps.isRequired,

    controls: PropTypes.object.isRequired, // eslint-disable-line
    values: PropTypes.any, // eslint-disable-line

    isSubmitting: PropTypes.bool.isRequired,
    isFormBuilder: PropTypes.bool,

    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onModuleError: PropTypes.func,
    onNotify: PropTypes.func,
  };

  static defaultProps = {
    values: undefined,
    isFormBuilder: false,
    onChange: Function.prototype,
    onSubmit: Function.prototype,
    onNotify: Function.prototype,
    onModuleError: Function.prototype,
  };

  renderModules = modules => {
    const {
      values,
      controls,

      isSubmitting,
      isFormBuilder,
      onChange,
      onSubmit,
      onModuleError,
      onNotify,
    } = this.props;

    if (!Array.isArray(modules)) {
      return (
        <Module
          module={modules}
          values={values}
          controls={controls}
          isSubmitting={isSubmitting}
          isFormBuilder={isFormBuilder}
          onChange={onChange}
          onSubmit={onSubmit}
          onNotify={onNotify}
          onModuleError={onModuleError}
        />
      );
    }
    return modules.map(module => (
      <Module
        key={module.name}
        module={module}
        values={values}
        controls={controls}
        isFormBuilder={isFormBuilder}
        isSubmitting={isSubmitting}
        onChange={onChange}
        onSubmit={onSubmit}
        onNotify={onNotify}
        onModuleError={onModuleError}
      />
    ));
  };

  render() {
    const {
      module,
      values,
      onChange,
      isSubmitting,
      isFormBuilder,
      onSubmit,
      onModuleError,
      onNotify,
      controls,
    } = this.props;

    const Control = controls[module.type];

    if (!Control) {
      return null;
    }
    const value = values ? values[module.name] : undefined;

    const { modules, ...rest } = module;

    const hasChildren = modules !== null && modules !== undefined;

    return (
      <Control
        {...rest}
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
        onModuleError={onModuleError}
        isSubmitting={isSubmitting}
        isFormBuilder={isFormBuilder}
        onNotify={onNotify}
      >
        {hasChildren && this.renderModules(modules)}
      </Control>
    );
  }
}
