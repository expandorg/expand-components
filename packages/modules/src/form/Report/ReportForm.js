import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dialog, Button, Dropdown, ErrorMessage } from '@expandorg/components';

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
        <form className={styles.container} onSubmit={this.handleSubmit}>
          <div className={styles.inner}>
            <div className={styles.title}>Report</div>

            <div className={styles.field}>
              <div className={styles.label}>Error</div>
              <Dropdown
                value={reason}
                className={styles.dropdown}
                nullValue="Select reason"
                placeholder="Select reason"
                onChange={this.handleSelectReason}
                options={reasons}
              />
            </div>
            <div className={styles.field}>
              <div className={styles.label}>Provide some details</div>
              <textarea
                value={value}
                className={styles.textarea}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <ErrorMessage errors={error} className={styles.error} />
          <div className={styles.actions}>
            <Button
              type="submit"
              className={styles.button}
              disabled={isReporting}
            >
              Report
            </Button>
            <Button
              className={styles.button}
              theme="grey"
              onClick={this.handleHide}
            >
              go back
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
}
