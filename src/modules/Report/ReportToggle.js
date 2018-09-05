import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from '../../components/Button';
import formProps from '../Form/formProps';

import { getReasons } from './reportReasons';

import styles from './ReportToggle.module.styl';

export default class ReportToggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    form: formProps,
  };

  static defaultProps = {
    form: null,
    className: null,
  };

  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  render() {
    const { children, form, className } = this.props;
    if (!form || form.report === false) {
      return null;
    }

    const reasons = getReasons(form.modules);
    if (!reasons.length) {
      return null;
    }

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
        {visible && children({ reasons, onHide: this.handleToggle })}
      </Fragment>
    );
  }
}
