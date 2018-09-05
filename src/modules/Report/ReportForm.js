import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogHeadline } from '../../components/Dialog';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';
import Dropdown from '../../components/Dropdown';

import DropdownContent from '../Dropdown/DropdownContent';
import ErrorMessage from '../../components/ErrorMessage';

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
        <DialogHeadline>Report</DialogHeadline>
        <form className={styles.container} onSubmit={this.handleSubmit}>
          <div className={styles.content}>
            <div className={styles.field}>
              <div className={styles.label}>Error</div>
              <Dropdown
                value={reason}
                className={styles.dropdown}
                nullValue="Select reason"
                onChange={this.handleSelectReason}
                options={reasons}
              >
                {({ formatted }) => (
                  <DropdownContent
                    value={formatted}
                    placeholder="Select reason"
                  />
                )}
              </Dropdown>
            </div>
            <div className={styles.field}>
              <div className={styles.label}>Provide some details</div>
              <Textarea
                value={value}
                className={styles.input}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <ErrorMessage error={error} className={styles.error} />
          <div className={styles.actions}>
            <Button
              onClick={this.handleHide}
              className={styles.cancel}
              theme="white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className={styles.report}
              disabled={isReporting}
            >
              Report
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
}
