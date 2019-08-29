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

    isSubmitting: PropTypes.bool,
    isModulePreview: PropTypes.bool,

    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onModuleError: PropTypes.func,
    onNotify: PropTypes.func,
  };

  static defaultProps = {
    values: undefined,
    errors: null,
    isModulePreview: false,
    isSubmitting: false,
    onChange: Function.prototype,
    onSubmit: Function.prototype,
    onNotify: Function.prototype,
    onModuleError: Function.prototype,
  };

  renderModules = modules => {
    const {
      values,
      controls,
      errors,

      isSubmitting,
      isModulePreview,

      onChange,
      onSubmit,
      onModuleError,
      onNotify,
    } = this.props;

    if (!Array.isArray(modules)) {
      return (
        <Module
          module={modules}
          errors={errors}
          values={values}
          controls={controls}
          isSubmitting={isSubmitting}
          isModulePreview={isModulePreview}
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
        errors={errors}
        module={module}
        values={values}
        controls={controls}
        isModulePreview={isModulePreview}
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
      isModulePreview,
      onSubmit,
      onModuleError,
      onNotify,
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
            isSubmitting={isSubmitting}
            isModulePreview={isModulePreview}
            onChange={onChange}
            onSubmit={onSubmit}
            onModuleError={onModuleError}
            onNotify={onNotify}
          >
            {hasChildren && this.renderModules(modules)}
          </Control>
        </Validation>
      </Logic>
    );
  }
}
