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
      <div className={styles.container}>
        <div className={styles.title}>Tags</div>
        <div className={styles.list}>
          {tags.map(tag => (
            <Tag
              tag={tag}
              key={tag.id}
              onSelect={onSelect}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    );
  }
}
