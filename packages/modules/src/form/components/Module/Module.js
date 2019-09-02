import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Validation from '../Validation';
import { Logic } from '../Logic';

import moduleProps from './moduleProps';

export default class Module extends Component {
  static propTypes = {
    module: moduleProps.isRequired,

    controls: PropTypes.object.isRequired, // eslint-disable-line
    values: PropTypes.any, // eslint-disable-line
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

    isModulePreview: PropTypes.bool,

    onChange: PropTypes.func,
    onModuleError: PropTypes.func,
  };

  static defaultProps = {
    values: undefined,
    errors: null,
    isModulePreview: false,
    onChange: Function.prototype,
    onModuleError: Function.prototype,
  };

  renderModules = modules => {
    const {
      values,
      controls,
      errors,
      isModulePreview,
      onChange,
      onModuleError,
    } = this.props;

    return modules.map(module => (
      <Module
        key={module.name}
        errors={errors}
        module={module}
        values={values}
        controls={controls}
        isModulePreview={isModulePreview}
        onChange={onChange}
        onModuleError={onModuleError}
      />
    ));
  };

  render() {
    const {
      module,
      values,
      onChange,
      isModulePreview,
      onModuleError,
      controls,
      errors,
    } = this.props;

    const Control = controls[module.type];

    if (!Control) {
      return null;
    }
    const value = values ? values[module.name] : undefined;

    const { modules } = module;
    const hasChildren = modules !== null && modules !== undefined;

    return (
      <Logic module={module} isModulePreview={isModulePreview}>
        <Validation name={module.name} errors={errors}>
          <Control
            {...module}
            value={value}
            isModulePreview={isModulePreview}
            onChange={onChange}
            onModuleError={onModuleError}
          >
            {hasChildren && this.renderModules(modules)}
          </Control>
        </Validation>
      </Logic>
    );
  }
}
