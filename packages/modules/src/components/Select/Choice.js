import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { VarsPlaceholder } from '@expandorg/components';

import { ReactComponent as Checkmark } from '@expandorg/uikit/assets/checkmark-3.svg';

import styles from './Choice.module.styl';

export default class Choice extends Component {
  static propTypes = {
    option: PropTypes.object.isRequired, // eslint-disable-line
    selected: PropTypes.bool,
    checkMark: PropTypes.bool,
    readOnly: PropTypes.bool,
    isModulePreview: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
  };

  static defaultProps = {
    checkMark: false,
    isModulePreview: false,
    readOnly: false,
    selected: false,
  };

  handleSelect = evt => {
    evt.preventDefault();
    const { onSelect, option, readOnly } = this.props;
    if (!readOnly) {
      onSelect(option.value);
    }
  };

  render() {
    const {
      option,
      selected,
      readOnly,
      checkMark,
      isModulePreview,
    } = this.props;
    const classes = cn(styles.container, {
      [styles.selected]: selected,
      [styles.readOnly]: readOnly,
    });

    const { id, caption } = option;
    return (
      <button type="button" className={classes} onClick={this.handleSelect}>
        {id && !checkMark && <span className={styles.id}>{id}</span>}
        {checkMark && (
          <div className={styles.mark}>
            <Checkmark
              width="20"
              height="20"
              viewBox="0 0 64 48"
              className={styles.icon}
            />
          </div>
        )}
        <span className={styles.caption}>
          {caption}
          <VarsPlaceholder vval={caption} isModulePreview={isModulePreview} />
        </span>
      </button>
    );
  }
}
