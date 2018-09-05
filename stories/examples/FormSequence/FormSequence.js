import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../src/components/Button';
import SourcesDialog from './SourcesDialog';

import { Form, formProps, FormDataProvider } from '../../../src/modules/Form';
import { Module } from '../../../src/modules/Module';

import { ReportToggle, ReportForm } from '../../../src/modules/Report';

import styles from './FormSequence.module.styl';

export default class FormSequence extends Component {
  static propTypes = {
    forms: PropTypes.arrayOf(formProps).isRequired,
    title: PropTypes.string.isRequired,
    showSource: PropTypes.bool,
    showReport: PropTypes.bool,
  };

  static defaultProps = {
    showSource: true,
    showReport: true,
  };

  state = {
    index: 0,
    report: null,
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
      this.setState({ index: index + 1, report: null });
    }
  };

  handleReport = (reason, value) => {
    alert(JSON.stringify({ reason, value }, undefined, 2));
  };

  handleError = report => {
    this.setState({ report });
  };

  render() {
    const { forms, showSource, title, showReport } = this.props;
    const { index, sources, formData, report } = this.state;

    const form = forms[index];
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div className={styles.actions}>
            {showSource && (
              <Button
                size="small"
                onClick={this.handleToggle}
                theme="link"
                className={styles.button}
              >
                Form source
              </Button>
            )}
            {showReport && (
              <ReportToggle form={form}>
                {({ onHide, reasons }) => (
                  <ReportForm
                    onHide={onHide}
                    reasons={reasons}
                    report={report}
                    onReport={this.handleReport}
                  />
                )}
              </ReportToggle>
            )}
          </div>
        </div>
        <FormDataProvider formData={formData}>
          <Form
            className={styles.form}
            form={form}
            onSubmit={this.handleSubmit}
            onModuleError={this.handleError}
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
