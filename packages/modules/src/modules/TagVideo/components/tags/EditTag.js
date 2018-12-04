import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@gemsorg/components';

import RangeBoundaries from '../../../../components/VideoPlayer/utils/RangeBoundaries';

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

  handleSave = evt => {
    evt.preventDefault();
    const { onSave, tag, readOnly } = this.props;
    if (tag.tag && !readOnly) {
      onSave(tag);
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
          <div className={styles.label}>Start time</div>
          <div className={styles.control}>
            <TimeInput
              readOnly={readOnly}
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
              readOnly={readOnly}
              className={styles.input}
              value={tag.end}
              onChange={this.handleChangeEnd}
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.label}>Tag</div>
          <div className={styles.control}>
            <LabelInput
              readOnly={readOnly}
              value={tag.tag}
              options={options}
              onChange={this.handleChangeLabel}
            />
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.label}>&nbsp;</div>
          <div className={styles.actions}>
            {save && !readOnly && (
              <Button
                className={styles.button}
                disabled={readOnly}
                theme="white"
                size="small"
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
