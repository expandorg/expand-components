import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatTime } from '../../../../components/VideoPlayer/utils/timeStrings';

import styles from './Tag.module.styl';

export default class EditTag extends Component {
  static propTypes = {
    tag: PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
      tag: PropTypes.string,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  handleSelect = evt => {
    evt.preventDefault();
    const { tag, onSelect } = this.props;
    onSelect(tag);
  };

  handleDelete = evt => {
    evt.preventDefault();
    evt.stopPropagation();
    const { tag, onDelete } = this.props;
    onDelete(tag);
  };

  render() {
    const { tag } = this.props;
    return (
      <div className={styles.container} onClick={this.handleSelect}>
        <button className={styles.delete} onClick={this.handleDelete}>
          ✕
        </button>
        <div className={styles.time}>
          {formatTime(tag.start)}—{formatTime(tag.end)}
        </div>
        <div className={styles.label}>{tag.tag}</div>
      </div>
    );
  }
}
