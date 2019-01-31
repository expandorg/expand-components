import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { validateForm } from '@expandorg/validation';
import { ErrorMessage } from '@expandorg/components';

import Validation from '../Validation';

import overrideFormVars from './variables/overrideFormVars';
import getInitialFormValues from './variables/getInitialFormValues';

import formProps from './formProps';

import moduleControls, { getModuleControlsMap } from './moduleControls';

import formValidationRules from './validation/formValidationRules';

import styles from './Form.module.styl';

export default class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    form: formProps.isRequired,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isSubmitting: PropTypes.bool,
    controls: PropTypes.arrayOf(PropTypes.func), // eslint-disable-line
    validation: PropTypes.bool,
    variables: PropTypes.object, // eslint-disable-line
    onSubmit: PropTypes.func.isRequired,
    onModuleError: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    controls: moduleControls,
    isSubmitting: false,
    validation: true,
    errors: null,
    onModuleError: Function.prototype,
  };

  constructor(props) {
    super(props);

    const form = overrideFormVars(props.form, props.variables);
    this.state = {
      controls: getModuleControlsMap(props.controls),
      values: getInitialFormValues(form),
      form,
      errors: null,
    };
  }

  componentWillReceiveProps({
    form: nextForm,
    variables: nextVars,
    errors: nextErrors,
  }) {
    const { errors, form, variables } = this.props;
    if (form !== nextForm || variables !== nextVars) {
      const overridedForm = overrideFormVars(nextForm, nextVars);
      this.setState({
        values: getInitialFormValues(overridedForm),
        form: overridedForm,
      });
    }
    if (nextErrors && nextErrors !== errors) {
      this.setState({ errors: nextErrors });
    }
  }

  handleChange = (module, value) => {
    this.setState(({ values, errors }) => ({
      values: {
        ...(values || {}),
        [module]: value,
      },
      errors: !errors
        ? errors
        : {
            ...errors,
            commonMessage: undefined,
            [module]: undefined,
          },
    }));
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmit, validation } = this.props;
    const { values, form, controls } = this.state;

    if (validation) {
      const rules = formValidationRules(form.modules, controls);
      const errors = validateForm(values || {}, rules);

      if (errors) {
        this.setState({ errors });
      } else {
        this.setState({ errors: null }, () => onSubmit(values));
      }
    } else {
      this.setState({ errors: null }, () => onSubmit(values));
    }
  };

  render() {
    const { className, isSubmitting, onModuleError, children } = this.props;
    const { values, errors, form, controls } = this.state;

    const props = {
      controls,
      isSubmitting,
      onChange: this.handleChange,
      onSubmit: this.handleSubmit,
      onModuleError,
    };

    return (
      <form
        className={cn(styles.container, className)}
        onSubmit={this.handleSubmit}
      >
        {form.modules.map(module => (
          <Validation key={module.name} name={module.name} errors={errors}>
            {children({
              module,
              value: values ? values[module.name] : undefined,
              ...props,
            })}
          </Validation>
        ))}
        <ErrorMessage className={styles.error} errors={errors} />
      </form>
    );
  }
}
