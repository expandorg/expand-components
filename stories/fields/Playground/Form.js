import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './Form.module.styl';

import { Field, Form } from '../../../src/fields/Field';

export default class PlaygrondForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object.isRequired, //eslint-disable-line
    onSubmit: PropTypes.func.isRequired,
  };

  handleSubmit = values => {
    const { onSubmit } = this.props;
    onSubmit(values);
  };

  render() {
    const { form } = this.props;
    return (
      <Form
        className={styles.form}
        form={form}
        submitState={{ state: '' }}
        onSubmit={this.handleSubmit}
      >
        {fieldProps => <Field {...fieldProps} />}
      </Form>
    );
  }
}
