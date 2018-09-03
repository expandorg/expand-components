import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogHeadline } from '../../components/Dialog';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';
import Dropdown from '../../components/Dropdown';

import moduleProps from '../Module/moduleProps';

import styles from './ReportForm.module.styl';

const getReportModule = (reports, modules) => {
  const withError = Reflect.ownKeys(reports || {});
  return withError.length ? withError[0] : modules[0].name;
};

export default class ReportForm extends Component {
  static propTypes = {
    modules: PropTypes.arrayOf(moduleProps).isRequired,
    reports: PropTypes.object, // eslint-disable-line
    onHide: PropTypes.func.isRequired,
    onReport: PropTypes.func.isRequired,
  };

  static defaultProps = {
    reports: {},
  };

  constructor(props) {
    super(props);

    const module = getReportModule(props.reports, props.modules);
    this.state = {
      module,
      value: props.reports[module] || '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ value: target.value });
  };

  handleSelect = module => {
    this.setState({ module });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { value, module } = this.state;
    const { onReport } = this.props;
    onReport(module, value);
  };

  render() {
    const { modules, onHide } = this.props;
    const { value, module } = this.state;
    return (
      <Dialog visible onHide={onHide} contentLabel="report">
        <DialogHeadline>Report</DialogHeadline>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.content}>
            <Dropdown
              value={module}
              onChange={this.handleSelect}
              options={modules.map(m => m.name)}
            >
              {({ formatted }) => formatted}
            </Dropdown>
            <Textarea
              value={value}
              className={styles.input}
              onChange={this.handleChange}
            />
          </div>
          <div className={styles.actions}>
            <Button onClick={onHide} className={styles.cancel}>
              Cancel
            </Button>
            <Button type="submit" className={styles.report}>
              Report
            </Button>
          </div>
        </form>
      </Dialog>
    );
  }
}
