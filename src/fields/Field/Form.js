import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import Submit from '../Submit';
import Validation from '../Validation';
import ErrorMessage from '../../components/ErrorMessage';

import fieldProps from './fieldProps';

import styles from './Form.module.styl';

export default class Form extends Component {
  static propTypes = {
    form: PropTypes.shape({
      description: PropTypes.string,
      submit: fieldProps,
      fields: PropTypes.arrayOf(fieldProps),
    }).isRequired,
    submitState: PropTypes.shape({
      state: PropTypes.string.isRequired,
      error: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }).isRequired,
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  state = {
    values: {},
    errors: null,
  };

  componentWillReceiveProps({ submitState: nextState }) {
    const { submitState } = this.props;
    if (nextState.error && nextState.error !== submitState.error) {
      this.setState({ errors: nextState.error });
    }
  }

  handleChange = (field, value) => {
    this.setState(({ values, errors }) => ({
      values: {
        ...values,
        [field]: value,
      },
      errors:
        !errors || !errors[field]
          ? errors
          : {
              ...errors,
              [field]: undefined,
            },
    }));
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { onSubmit } = this.props;
    const { values } = this.state;

    onSubmit(values);
  };

  render() {
    const { className, submitState, form, children } = this.props;
    const { values, errors } = this.state;
    const isSubmitting = submitState.state === 'Fetching';

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
          <div className={styles.description}>{form.description}</div>
        )}
        {form.fields.map(field => (
          <Validation key={field.name} name={field.name} error={errors}>
            {children({ field, value: values[field.name], ...props })}
          </Validation>
        ))}
        <ErrorMessage error={errors} />
        {form.submit && (
          <Submit
            {...form.submit}
            isSubmitting={isSubmitting}
            onSubmit={this.handleSubmit}
          />
        )}
      </form>
    );
  }
}
