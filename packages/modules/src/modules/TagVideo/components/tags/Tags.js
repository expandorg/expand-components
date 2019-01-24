import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tag from './Tag';

import styles from './Tags.module.styl';

export default class Tags extends Component {
  static propTypes = {
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
        tag: PropTypes.string,
      })
    ),
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  static defaultProps = {
    tags: [],
  };

  render() {
    const { tags, onSelect, onDelete } = this.props;
    if (!tags.length) {
      return null;
    }
    return (
      <table className={styles.container}>
        <thead>
          <tr className={styles.header}>
            <th className={styles.headLabel}>Label</th>
            <th className={styles.headLabel}>Start Time</th>
            <th className={styles.headLabel}>End Time</th>
            <th className={styles.headLabel}>Remove</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {tags.map((tag, index) => (
            <Tag
              index={index}
              tag={tag}
              key={tag.id}
              onSelect={onSelect}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
