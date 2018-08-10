import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import styles from './Title.module.styl';

export default class Title extends Component {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    className: null,
    title: '',
  };

  render() {
    const { title, className } = this.props;
    return <h3 className={cn(styles.title, className)}>{title}</h3>;
  }
}
