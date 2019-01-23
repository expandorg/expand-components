import React, { Component } from 'react';

import { Module } from '../Module';
import { Form, formProps, FormDataProvider } from '../Form';

import styles from './ModulesPlayground.module.styl';

export default class ModulesPlayground extends Component {
  static propTypes = {
    form: formProps.isRequired,
  };

  state = {
    formData: { allowedRetries: 3, currentTry: 1 },
  };

  handleSubmit = values => {
    alert(JSON.stringify(values, undefined, 2));
  };

  render() {
    const { form } = this.props;
    const { formData } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.panel}>
          <FormDataProvider formData={formData}>
            <Form
              form={form}
              className={styles.form}
              onSubmit={this.handleSubmit}
            >
              {moduleProps => <Module {...moduleProps} />}
            </Form>
          </FormDataProvider>
        </div>
      </div>
    );
  }
}
