import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { validateForm } from '../../common/validation';

import Validation from '../Validation';
import ErrorMessage from '../../components/ErrorMessage';

import overrideFormVars from './variables/overrideFormVars';

import formProps from './formProps';

import formValidationRules from './validation/formValidationRules';

import styles from './Form.module.styl';

export default class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    form: formProps.isRequired,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isSubmitting: PropTypes.bool,
    validation: PropTypes.bool,
    variables: PropTypes.object, // eslint-disable-line
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    isSubmitting: false,
    validation: true,
    errors: null,
  };

  constructor(props) {
    super(props);
    this.state = {
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
    const { values, form } = this.state;

    if (validation) {
      const rules = formValidationRules(form.modules);
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
    const { className, isSubmitting, children } = this.props;
    const { values, errors, form } = this.state;

    const props = {
      isSubmitting,
      onChange: this.handleChange,
      onSubmit: this.handleSubmit,
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
