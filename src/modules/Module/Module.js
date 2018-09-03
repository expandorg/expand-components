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
    onReport: PropTypes.func,
    onSubmit: PropTypes.func,
    controls: PropTypes.object, // eslint-disable-line
  };

  static defaultProps = {
    value: undefined,
    controls: moduleControls,
    onChange: Function.prototype,
    onReport: Function.prototype,
    onSubmit: Function.prototype,
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
      onReport,
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
          onReport={onReport}
          onChange={onChange}
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
        onReport={onReport}
        isSubmitting={isSubmitting}
        renderModules={this.renderModules}
      />
    );
  }
}
