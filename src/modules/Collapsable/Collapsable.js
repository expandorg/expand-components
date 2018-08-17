import React, { Component } from 'react';
import PropTypes from 'prop-types';

import UICollapsable from '../../components/Collapsable';

import Alignment from '../Alignment';

import styles from './Collapsable.module.styl';

export default class Collapsable extends Component {
  static propTypes = {
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    expanded: PropTypes.bool, //eslint-disable-line
  };

  static defaultProps = {
    expanded: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      expanded: props.expanded,
    };
  }

  handleToggle = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  };

  render() {
    const { header, children } = this.props;
    const { expanded } = this.state;
    return (
      <Alignment padding="small">
        <UICollapsable
          className={styles.collapsable}
          expanded={expanded}
          header={<div className={styles.header}>{header}</div>}
          onToggle={this.handleToggle}
        >
          <div className={styles.container}>{children}</div>
        </UICollapsable>
      </Alignment>
    );
  }
}
