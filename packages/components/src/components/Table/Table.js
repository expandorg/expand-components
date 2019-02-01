import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Table.styl';

export default class Table extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  render() {
    const { children, className } = this.props;

    return (
      <table className={cn('gem-table', className)}>
        <tbody className="gem-tbody">{children}</tbody>
      </table>
    );
  }
}
