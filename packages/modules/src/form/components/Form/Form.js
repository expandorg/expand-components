import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { validateForm } from '@expandorg/validation';
import { ErrorMessage } from '@expandorg/components';

import { ExecutionContextProvider } from '../ExecutionContext';
import { VarsPreviewContextProvider } from '../VarsPlaceholder';

import formProps from './formProps';

import { getModuleControlsMap } from '../../model/modules';
import { formValidationRules } from '../../model/validation';
import { overrideFormVars, getInitialFormValues } from '../../model/variables';

import styles from './Form.module.styl';

export default class Form extends Component {
  static propTypes = {
    className: PropTypes.string,

    form: formProps.isRequired,
    validation: PropTypes.bool,
    initial: PropTypes.shape({}),
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

    services: PropTypes.instanceOf(Map),
    controls: PropTypes.arrayOf(PropTypes.func).isRequired,
    variables: PropTypes.object, // eslint-disable-line

    isSubmitting: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    onModuleError: PropTypes.func,
    onNotify: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    services: new Map(),
    isSubmitting: false,
    validation: true,
    errors: null,
    initial: undefined,
    onChange: Function.prototype,
    onModuleError: Function.prototype,
    onNotify: Function.prototype,
  };

  constructor(props) {
    super(props);

    const form = overrideFormVars(props.form, props.variables);

    this.state = {
      controls: getModuleControlsMap(props.controls),
      values: getInitialFormValues(form, props.initial),
      form,
      errors: null,
    };
  }

  componentWillReceiveProps({
    form: nextForm,
    variables: nextVars,
    errors: nextErrors,
    initial: nextInitial,
  }) {
    const { errors, form, variables } = this.props;
    if (form !== nextForm || variables !== nextVars) {
      const overrided = overrideFormVars(nextForm, nextVars);
      this.setState({
        values: getInitialFormValues(overrided, nextInitial),
        form: overrided,
      });
    }
    if (nextErrors && nextErrors !== errors) {
      this.setState({ errors: nextErrors });
    }
  }

  handleChange = (name, value) => {
    const { onChange } = this.props;

    this.setState(
      ({ values, errors }) => ({
        values: {
          ...(values || {}),
          [name]: value,
        },
        errors: !errors
          ? errors
          : {
              ...errors,
              commonMessage: undefined,
              [name]: undefined,
            },
      }),
      () => onChange(this.state.values)
    );
  };

  handleValidate = modules => {
    const { values, controls } = this.state;
    const { validation } = this.props;

    if (!validation) {
      return null;
    }
    const rules = formValidationRules(modules, controls);
    const errors = validateForm(values || {}, rules);
    this.setState({ errors });
    return errors;
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { onSubmit, validation } = this.props;
    const { values, form } = this.state;

    if (validation && this.handleValidate(form.modules)) {
      return;
    }
    onSubmit(values);
  };

  render() {
    const {
      className,
      isSubmitting,
      onModuleError,
      children,
      onNotify,
      variables,
      services,
    } = this.props;

    const { values, errors, form, controls } = this.state;

    const props = {
      controls,
      values,
      errors,
      onChange: this.handleChange,
    };

    return (
      <ExecutionContextProvider
        form={form}
        values={values}
        services={services}
        variables={variables}
        controls={controls}
        isSubmitting={isSubmitting}
        onSubmit={this.handleSubmit}
        onValidate={this.handleValidate}
        onModuleError={onModuleError}
        onNotify={onNotify}
      >
        <VarsPreviewContextProvider>
          <form className={cn(styles.container, className)}>
            {form.modules.map(module =>
              children({ module, key: module.name, ...props })
            )}
            <ErrorMessage className={styles.error} errors={errors} />
          </form>
        </VarsPreviewContextProvider>
      </ExecutionContextProvider>
    );
  }
}
