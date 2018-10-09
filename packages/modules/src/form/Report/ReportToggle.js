import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Button } from '@gemsorg/components';
import { formProps } from '../Form';
import moduleControls, { getModuleControlsMap } from '../Form/moduleControls';

import { getReasons } from './reportReasons';

import styles from './ReportToggle.module.styl';

export default class ReportToggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    controls: PropTypes.arrayOf(PropTypes.func), // eslint-disable-line
    form: formProps,
  };

  static defaultProps = {
    form: null,
    controls: moduleControls,
    className: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      controls: getModuleControlsMap(props.controls),
      visible: false,
    };
  }

  handleToggle = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  render() {
    const { children, form, className } = this.props;
    const { controls } = this.state;

    if (!form || form.report === false) {
      return null;
    }

    const reasons = getReasons(form.modules, controls);
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
