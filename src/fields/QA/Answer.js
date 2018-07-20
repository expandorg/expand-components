import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Answer.module.styl';

const formatItem = answer => {
  if (typeof answer === 'string') {
    return { id: null, caption: answer };
  }
  return answer;
};

export default class Answer extends Component {
  static propTypes = {
    answer: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
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

    const { onSelect, answer } = this.props;
    onSelect(answer);
  };

  render() {
    const { className, answer, selected } = this.props;
    const classes = cn(
      styles.container,
      {
        [styles.selected]: selected,
      },
      className
    );

    const { id, caption } = formatItem(answer);

    return (
      <button type="button" className={classes} onClick={this.handleSelect}>
        {id && <span className={styles.id}>{id}</span>}
        <span className={styles.caption}>{caption}</span>
      </button>
    );
  }
}
