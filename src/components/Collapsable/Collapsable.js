import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Collapsable.module.styl';

export default class Collapsable extends Component {
  static propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    expanded: PropTypes.bool,
  };

  static defaultProps = {
    expanded: false,
  };

  state = {
    expanded: this.props.expanded, // eslint-disable-line
  };

  handleToggle = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };

  render() {
    const { header, children } = this.props;
    const { expanded } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.header} onClick={this.handleToggle}>
          {header}
        </div>
        {expanded && <div className={styles.content}>{children}</div>}
      </div>
    );
  }
}
