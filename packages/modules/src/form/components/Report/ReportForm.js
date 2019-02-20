import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Dialog,
  Button,
  Dropdown,
  ErrorMessage,
  DialogForm as DF,
} from '@expandorg/components';

import styles from './ReportForm.module.styl';

export default class ReportForm extends Component {
  static propTypes = {
    report: PropTypes.string,
    error: PropTypes.shape({}),
    reasons: PropTypes.arrayOf(PropTypes.string),
    onHide: PropTypes.func.isRequired,
    isReporting: PropTypes.bool,
    onReport: PropTypes.func.isRequired,
  };

  static defaultProps = {
    report: null,
    error: null,
    isReporting: false,
    reasons: [],
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.report || '',
      reason: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleSelectReason = reason => {
    this.setState({ reason });
  };

  handleHide = () => {
    const { isReporting, onHide } = this.props;
    if (!isReporting) {
      onHide();
    }
  };

  handleSubmit = evt => {
    evt.preventDefault();
    evt.stopPropagation();

    const { onReport, isReporting } = this.props;
    if (!isReporting) {
      const { value, reason } = this.state;
      onReport(reason, value);
    }
  };

  render() {
    const { reasons, isReporting, error } = this.props;
    const { value, reason } = this.state;

    return (
      <Dialog visible onHide={this.handleHide} contentLabel="report">
        <DF.Container>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <DF.Title className={styles.title}>Report</DF.Title>
            {reasons && reasons.length !== 0 && (
              <DF.Field>
                <Dropdown
                  value={reason}
                  className={styles.dropdown}
                  nullValue="Select reason"
                  label="Select reason"
                  onChange={this.handleSelectReason}
                  options={reasons}
                />
              </DF.Field>
            )}

            <DF.Field className={styles.field}>
              <div className={styles.label}>Provide some details</div>
              <textarea
                value={value}
                className={styles.textarea}
                onChange={this.handleChange}
              />
            </DF.Field>
            <DF.FormError>
              <ErrorMessage errors={error} />
            </DF.FormError>
            <DF.Actions>
              <Button
                type="submit"
                className="gem-dialogform-button"
                disabled={isReporting}
              >
                Report
              </Button>
              <Button
                className="gem-dialogform-button"
                theme="grey"
                onClick={this.handleHide}
              >
                go back
              </Button>
            </DF.Actions>
          </form>
        </DF.Container>
      </Dialog>
    );
  }
}
