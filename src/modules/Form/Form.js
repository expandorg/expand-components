import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { validateForm } from '../../common/validation';

import Validation from '../Validation';
import ErrorMessage from '../../components/ErrorMessage';

import overrideFormVars from './variables/overrideFormVars';

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
    this.state = {
      controls: getModuleControlsMap(props.controls),
      values: null,
      form: overrideFormVars(props.form, props.variables),
      errors: null,
    };
  }

  componentWillReceiveProps({ form: nextForm, variables, errors: nextErrors }) {
    const { errors, form } = this.props;
    if (form !== nextForm) {
      this.setState({
        values: null,
        form: overrideFormVars(nextForm, variables),
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
          <Validation key={module.name} name={module.name} error={errors}>
            {children({
              module,
              value: values ? values[module.name] : undefined,
              ...props,
            })}
          </Validation>
        ))}
        <ErrorMessage className={styles.error} error={errors} />
      </form>
    );
  }
}
