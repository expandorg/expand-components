import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Choice.module.styl';

const formatItem = option => {
  if (typeof option === 'string') {
    return { id: null, caption: option };
  }
  return option;
};

export default class Choice extends Component {
  static propTypes = {
    option: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    className: PropTypes.string,
    selected: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    selected: false,
  };

  handleSelect = evt => {
    evt.preventDefault();

    const { onSelect, option } = this.props;
    onSelect(option);
  };

  render() {
    const { className, option, selected } = this.props;
    const classes = cn(
      styles.container,
      {
        [styles.selected]: selected,
      },
      className
    );

    const { id, caption } = formatItem(option);

    return (
      <button type="button" className={classes} onClick={this.handleSelect}>
        {id && <span className={styles.id}>{id}</span>}
        <span className={styles.caption}>{caption}</span>
      </button>
    );
  }
}
