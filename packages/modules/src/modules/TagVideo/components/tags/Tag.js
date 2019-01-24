import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { formatTime } from '../../../../components/VideoPlayer/utils/timeStrings';

import styles from './Tags.module.styl';

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

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

    return (
      <tr className={styles.row}>
        <td className={styles.cell} onClick={this.handleSelect}>
          {tag.tag}
        </td>
        <td className={styles.cell} onClick={this.handleSelect}>
          {formatTime(tag.start)}
        </td>
        <td className={styles.cell} onClick={this.handleSelect}>
          {formatTime(tag.end)}
        </td>
        <td className={cn(styles.cell, styles.cellDelete)}>
          <button className={styles.delete} onClick={this.handleDelete}>
            ✕
          </button>
        </td>
      </tr>
    );
  }
}
