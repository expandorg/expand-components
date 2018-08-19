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
    renderModules: PropTypes.func,
  };

  static defaultProps = {
    value: undefined,
    controls: moduleControls,
    onChange: Function.prototype,
    onSubmit: Function.prototype,
    renderModules: null,
  };

  renderModules = modules => {
    const { controls, isSubmitting } = this.props;
    if (!Array.isArray(modules)) {
      return (
        <Module
          module={modules}
          controls={controls}
          isSubmitting={isSubmitting}
        />
      );
    }
    return modules.map(module => (
      <Module
        key={module.name}
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
      controls,
      renderModules,
    } = this.props;

    const moduleRenderer = renderModules || this.renderModules;

    const Control = controls[module.type];
    if (!Control) {
      return null;
    }
    if (typeof module.modules !== 'undefined') {
      const { modules, ...rest } = module;
      return (
        <Control
          renderModules={moduleRenderer}
          value={value}
          onChange={onChange}
          {...rest}
        >
          {moduleRenderer(modules)}
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
        renderModules={moduleRenderer}
      />
    );
  }
}
