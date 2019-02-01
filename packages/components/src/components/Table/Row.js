import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class Row extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, className } = this.props;

    return <tr className={cn('gem-table-row', className)}>{children}</tr>;
  }
}
