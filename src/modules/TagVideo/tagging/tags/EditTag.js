import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import { RangeBoundaries } from '../clip';

import TimeInput from './TimeInput';

import styles from './EditTag.module.styl';

export default class EditTag extends Component {
  static propTypes = {
    duration: PropTypes.number.isRequired,
    tag: PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
      tag: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  labelRef = createRef();

  handleSave = evt => {
    evt.preventDefault();
    const { onSave, tag } = this.props;
    if (!tag.tag) {
      this.labelRef.current.focus();
    } else {
      onSave(tag);
    }
  };

  handleClear = evt => {
    evt.preventDefault();
    const { onSave } = this.props;
    onSave(null);
  };

  handleChangeStart = value => {
    const { tag, duration, onChange } = this.props;
    const { start, end } = RangeBoundaries.start(
      value,
      tag.start,
      tag.end,
      duration
    );
    onChange({ ...tag, start, end });
  };

  handleChangeEnd = value => {
    const { tag, onChange, duration } = this.props;
    const { start, end } = RangeBoundaries.end(
      value,
      tag.start,
      tag.end,
      duration
    );
    onChange({ ...tag, start, end });
  };

  handleChangeLabel = ({ target }) => {
    const { tag, onChange } = this.props;
    onChange({ ...tag, tag: target.value });
  };

  render() {
    const { tag } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.field}>
          <div className={styles.label}>Start time</div>
          <div className={styles.control}>
            <TimeInput
              className={styles.input}
              value={tag.start}
              onChange={this.handleChangeStart}
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.label}>End Time</div>
          <div className={styles.control}>
            <TimeInput
              className={styles.input}
              value={tag.end}
              onChange={this.handleChangeEnd}
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.label}>Tag</div>
          <div className={styles.control}>
            <Input
              className={styles.input}
              ref={this.labelRef}
              placeholder="Label"
              value={tag.tag}
              onChange={this.handleChangeLabel}
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.label}>&nbsp;</div>
          <div className={styles.actions}>
            <Button
              className={styles.button}
              theme="white"
              size="small"
              onClick={this.handleSave}
            >
              {tag.id ? 'Save' : 'Add'}
            </Button>
            <button className={styles.delete} onClick={this.handleClear}>
              ✕
            </button>
          </div>
        </div>
      </div>
    );
  }
}