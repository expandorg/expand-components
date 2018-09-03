import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../../components/Button';

import ReportForm from './ReportForm';

import styles from './ReportToggle.module.styl';

export default class ReportToggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    report: PropTypes.string,
    onReport: PropTypes.func.isRequired,
  };

  static defaultProps = {
    report: null,
    className: null,
  };

  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  render() {
    const { report, onReport, className } = this.props;
    const { visible } = this.state;
    return (
      <Fragment>
        <Button
          onClick={this.handleToggle}
          theme="link"
          size="small"
          className={cn(styles.toggle, className)}
        >
          report
        </Button>
        {visible && (
          <ReportForm
            report={report}
            onReport={onReport}
            onHide={this.handleToggle}
          />
        )}
      </Fragment>
    );
  }
}
