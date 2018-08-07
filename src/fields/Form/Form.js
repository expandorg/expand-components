import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Validation from '../Validation';
import Paragraph from '../Paragraph';
import ErrorMessage from '../../components/ErrorMessage';

import formProps from './formProps';

import styles from './Form.module.styl';

export default class Form extends Component {
  static propTypes = {
    className: PropTypes.string,
    form: formProps.isRequired,
    errors: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    isSubmitting: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    isSubmitting: false,
    errors: null,
  };

  state = {
    values: null,
    errors: null,
  };

  componentWillReceiveProps({ form: nextForm, errors: nextErrors }) {
    const { errors, form } = this.props;
    if (form !== nextForm) {
      this.setState({ values: null });
    }
    if (nextErrors && nextErrors !== errors) {
      this.setState({ errors: nextErrors });
    }
  }

  handleChange = (field, value) => {
    this.setState(({ values, errors }) => ({
      values: {
        ...(values || {}),
        [field]: value,
      },
      errors: !errors
        ? errors
        : {
            ...errors,
            commonMessage: undefined,
            [field]: undefined,
          },
    }));
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;
    const { values } = this.state;
    this.setState({ errors: null }, () => onSubmit(values));
  };

  render() {
    const { className, isSubmitting, form, children } = this.props;
    const { values, errors } = this.state;

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
        {form.description && (
          <Paragraph
            className={styles.description}
            centered
            fontSize="medium"
            content={form.description}
          />
        )}
        {form.fields.map(field => (
          <Validation key={field.name} name={field.name} error={errors}>
            {children({
              field,
              value: values ? values[field.name] : undefined,
              ...props,
            })}
          </Validation>
        ))}
        <ErrorMessage className={styles.error} error={errors} />
      </form>
    );
  }
}
