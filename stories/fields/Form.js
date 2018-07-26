import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.styl';

import ErrorMessage from '../../src/components/ErrorMessage';
import Button from '../../src/components/Button';

import Validation from '../../src/fields/Validation';
import { Field } from '../../src/fields/Field';

export default class Form extends Component {
  static propTypes = {
    form: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    values: {},
    errors: null,
  };

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
    const { values } = this.state;
    alert(JSON.stringify(values));
  };

  render() {
    const { form } = this.props;
    const { values, errors } = this.state;
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.description}>{form.description}</div>
          <ErrorMessage error={errors} />
          {form.fields.map(field => (
            <Validation key={field.name} name={field.name} error={errors}>
              <Field
                field={field}
                value={values[field.name]}
                isSubmitting={false}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
            </Validation>
          ))}
          <div className={styles.actions}>
            <Button
              theme="pink"
              size="large"
              className={styles.submit}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
