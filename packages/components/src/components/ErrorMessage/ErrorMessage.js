import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './ErrorMessage.styl';

export default class ErrorMessage extends Component {
  static propTypes = {
    errors: PropTypes.shape({}),
    field: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    field: 'commonMessage',
    errors: null,
    className: null,
  };

  render() {
    const { errors, className, field } = this.props;
    const errorMessage = errors && errors[field];
    if (!errorMessage) {
      return null;
    }
    return (
      <div className={cn('gem-errormessage', className)}>{errorMessage}</div>
    );
  }
}
