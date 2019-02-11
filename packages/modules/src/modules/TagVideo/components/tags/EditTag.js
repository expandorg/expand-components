import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@expandorg/components';

import RangeBoundaries from '../../../../components/Timeline/utils/RangeBoundaries';

import TimeInput from './TimeInput';
import LabelInput from './LabelInput';

import styles from './EditTag.module.styl';

export default class EditTag extends PureComponent {
  static propTypes = {
    duration: PropTypes.number.isRequired,
    tag: PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
      tag: PropTypes.string,
    }).isRequired,

    limitFrom: PropTypes.number,
    limitTo: PropTypes.number,

    options: PropTypes.arrayOf(PropTypes.string),
    readOnly: PropTypes.bool,
    save: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func,
  };

  static defaultProps = {
    onSave: null,
    save: false,
    limitFrom: undefined,
    limitTo: undefined,
    readOnly: false,
    options: [],
  };

  label = createRef();

  handleSave = evt => {
    evt.preventDefault();
    const { onSave, tag, readOnly } = this.props;
    if (!readOnly) {
      if (tag.tag) {
        onSave(tag);
      } else if (this.label && this.label.current) {
        this.label.current.focus();
      }
    }
  };

  handleClear = evt => {
    evt.preventDefault();
    const { onSave, readOnly } = this.props;
    if (!readOnly) {
      onSave(null);
    }
  };

  handleChangeStart = value => {
    const {
      tag,
      duration,
      readOnly,
      onChange,
      limitFrom,
      limitTo,
    } = this.props;
    if (readOnly) {
      return;
    }
    const { start, end } = RangeBoundaries.start(
      value,
      tag.start,
      tag.end,
      duration,
      limitFrom,
      limitTo
    );
    onChange({ ...tag, start, end });
  };

  handleChangeEnd = value => {
    const {
      tag,
      onChange,
      duration,
      limitFrom,
      limitTo,
      readOnly,
    } = this.props;
    if (readOnly) {
      return;
    }

    const { start, end } = RangeBoundaries.end(
      value,
      tag.start,
      tag.end,
      duration,
      limitFrom,
      limitTo
    );
    onChange({ ...tag, start, end });
  };

  handleChangeLabel = value => {
    const { tag, onChange, readOnly } = this.props;
    if (!readOnly) {
      onChange({ ...tag, tag: value });
    }
  };

  render() {
    const { tag, save, options, readOnly } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.field}>
          <div className={styles.control}>
            <TimeInput
              readOnly={readOnly}
              placeholder="Start time"
              className={styles.input}
              value={tag.start}
              onChange={this.handleChangeStart}
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.control}>
            <TimeInput
              readOnly={readOnly}
              placeholder="End time"
              className={styles.input}
              value={tag.end}
              onChange={this.handleChangeEnd}
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.control}>
            <LabelInput
              placeholder="Tag"
              readOnly={readOnly}
              sendRef={this.label}
              value={tag.tag}
              options={options}
              onChange={this.handleChangeLabel}
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.actions}>
            {save && !readOnly && (
              <Button
                className={styles.button}
                disabled={readOnly}
                theme="white-blue"
                onClick={this.handleSave}
              >
                {tag.id ? 'Save' : 'Add'}
              </Button>
            )}
            {!readOnly && (
              <button
                className={styles.delete}
                disabled={readOnly}
                onClick={this.handleClear}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
