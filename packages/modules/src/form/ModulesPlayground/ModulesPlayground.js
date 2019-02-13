import React, { Component } from 'react';

import { NotificationAnimated } from '@expandorg/components/app';

import { Module } from '../Module';
import { Form, formProps, FormDataProvider } from '../Form';

import FileUploadServiceMock from './FileUploadServiceMock';

import styles from './ModulesPlayground.module.styl';

const fileUploadService = new FileUploadServiceMock();

export default class ModulesPlayground extends Component {
  static propTypes = {
    form: formProps.isRequired,
  };

  state = {
    formData: {
      allowedRetries: 3,
      currentTry: 1,
      fileUploadService,
    },
    notification: null,
  };

  handleSubmit = values => {
    alert(JSON.stringify(values, undefined, 2));
  };

  handleNotify = (type, message) => {
    this.setState({ notification: { type, message } });
  };

  render() {
    const { form } = this.props;
    const { formData, notification } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.panel}>
          <FormDataProvider formData={formData}>
            <Form
              form={form}
              className={styles.form}
              onSubmit={this.handleSubmit}
              onNotify={this.handleNotify}
            >
              {moduleProps => <Module {...moduleProps} />}
            </Form>
          </FormDataProvider>
        </div>
        <NotificationAnimated
          notification={notification}
          onClear={() => this.setState({ notification: null })}
        />
      </div>
    );
  }
}
