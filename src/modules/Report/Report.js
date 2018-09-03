import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../../components/Button';

import ReportForm from './ReportForm';

import moduleProps from '../Module/moduleProps';

import styles from './Report.module.styl';

export default class Report extends Component {
  static propTypes = {
    modules: PropTypes.arrayOf(moduleProps).isRequired,
    className: PropTypes.string,
    reports: PropTypes.object, // eslint-disable-line
    onReport: PropTypes.func.isRequired,
  };

  static defaultProps = {
    reports: null,
    className: null,
  };

  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  render() {
    const { modules, reports, onReport, className } = this.props;
    const { visible } = this.state;
    return (
      <Fragment>
        <Button
          onClick={this.handleToggle}
          theme="link"
          size="small"
          className={cn(styles.toggle, className)}
        >
          Report
        </Button>
        {visible && (
          <ReportForm
            modules={modules}
            reports={reports}
            onReport={onReport}
            onHide={this.handleToggle}
          />
        )}
      </Fragment>
    );
  }
}
