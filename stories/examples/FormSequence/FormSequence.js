import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../src/components/Button';
import SourcesDialog from './SourcesDialog';

import { Form, formProps, FormDataProvider } from '../../../src/modules/Form';
import { Module } from '../../../src/modules/Module';

import styles from './FormSequence.module.styl';

export default class FormSequence extends Component {
  static propTypes = {
    forms: PropTypes.arrayOf(formProps).isRequired,
    showSource: PropTypes.bool,
  };

  static defaultProps = {
    showSource: true,
  };

  state = {
    index: 0,
    sources: false,
    formData: { allowedRetries: 3, currentTry: 1 },
  };

  handleToggle = () => {
    this.setState(({ sources }) => ({ sources: !sources }));
  };

  handleSubmit = () => {
    const { forms } = this.props;
    const { index } = this.state;
    if (index < forms.length - 1) {
      this.setState({ index: index + 1 });
    }
  };

  render() {
    const { forms, showSource } = this.props;
    const { index, sources, formData } = this.state;

    const form = forms[index];
    return (
      <div className={styles.container}>
        {showSource && (
          <div className={styles.actions}>
            <Button
              size="small"
              onClick={this.handleToggle}
              theme="link"
              className={styles.button}
            >
              Form source
            </Button>
          </div>
        )}
        <FormDataProvider formData={formData}>
          <Form
            form={form}
            onSubmit={this.handleSubmit}
            className={styles.form}
          >
            {moduleProps => <Module {...moduleProps} />}
          </Form>
        </FormDataProvider>
        <SourcesDialog
          visible={sources}
          onHide={this.handleToggle}
          form={form}
        />
      </div>
    );
  }
}
