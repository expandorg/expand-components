import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Checkmark } from '../../components/SvgIcons';

import { MediaTooltip } from '../Tooltip';

import Hint from './Hint';

import styles from './Choice.module.styl';

const formatItem = option => {
  if (typeof option === 'string') {
    return { id: null, caption: option, hint: null };
  }
  return option;
};

export default class Choice extends Component {
  static propTypes = {
    option: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    className: PropTypes.string,
    selected: PropTypes.bool,
    hideIds: PropTypes.bool,
    checkMark: PropTypes.bool,
    readOnly: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    hideIds: false,
    checkMark: false,
    readOnly: false,
    selected: false,
  };

  handleSelect = evt => {
    evt.preventDefault();
    const { onSelect, option, readOnly } = this.props;
    if (!readOnly) {
      onSelect(option);
    }
  };

  render() {
    const {
      className,
      option,
      selected,
      readOnly,
      checkMark,
      hideIds,
    } = this.props;
    const classes = cn(
      styles.container,
      {
        [styles.selected]: selected,
        [styles.readOnly]: readOnly,
      },
      className
    );

    const { id, caption, hint } = formatItem(option);
    return (
      <button type="button" className={classes} onClick={this.handleSelect}>
        {id &&
          !checkMark &&
          !hideIds && <span className={styles.id}>{id}</span>}
        {checkMark && (
          <div className={styles.mark}>
            <Checkmark className={styles.icon} />
          </div>
        )}
        <span className={styles.caption}>{caption}</span>
        {hint && <Hint tooltip={<MediaTooltip content={hint} />} />}
      </button>
    );
  }
}
