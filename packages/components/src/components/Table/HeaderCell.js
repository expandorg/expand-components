import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

export default class HeaderCell extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, className } = this.props;

    return (
      <th className={cn('gem-table-header-cell', className)}>{children}</th>
    );
  }
}
