import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { removeAtIndex, replaceAtIndex } from '../../../common/immutable';

import {
  VideoPlayer,
  TimelineRangeEdit,
  TimelineRange,
} from '../../../components/VideoPlayer';

import Tags from './tags/Tags';
import EditTag from './tags/EditTag';

import styles from './styles.module.styl';

const DEFAULT_SPAN_SEC = 2;

const tagId = tag => `${tag.start}-${tag.end}`;

export default class TagVideo extends Component {
  static propTypes = {
    video: PropTypes.string.isRequired,
    className: PropTypes.string,
    tags: PropTypes.arrayOf(
      PropTypes.shape({
        start: PropTypes.number.isRequired,
        end: PropTypes.number.isRequired,
        tag: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(PropTypes.string),
    startTime: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    startTime: undefined,
    className: null,
    tags: [],
    options: [],
  };

  state = {
    duration: 0,
    playing: true,
    selected: null,
  };

  handleVideoReady = duration => {
    this.setState({ duration });
  };

  handleChangeTag = selected => {
    this.setState({ selected });
  };

  handleRangeChange = (start, end) => {
    const { selected } = this.state;
    this.setState({ selected: { ...selected, start, end } });
  };

  handleCursorClick = start => {
    const { duration } = this.state;
    if (duration) {
      const end = Math.min(start + DEFAULT_SPAN_SEC, duration);
      this.setState({ selected: { start, end, tag: '' } });
    }
  };

  handleRangeDragging = dragging => {
    this.setState({ playing: !dragging });
  };

  handleTogglePlay = playing => {
    this.setState({ playing });
  };

  handleSaveTag = tag => {
    const { tags, onChange } = this.props;
    this.setState({ selected: null });
    if (tag) {
      if (!tag.id) {
        onChange([...tags, { id: tagId(tag), ...tag }]);
      } else {
        const index = tags.findIndex(t => t.id === tag.id);
        if (index !== -1) {
          onChange(replaceAtIndex(tags, index, tag));
        }
      }
    }
  };

  handleSelectTag = selected => {
    this.setState({ selected });
  };

  handleDeleteTag = tag => {
    const { tags, onChange } = this.props;
    const index = tags.indexOf(tag);
    if (index !== -1) {
      onChange(removeAtIndex(tags, index));
    }
  };

  render() {
    const { video, className, tags, startTime, options } = this.props;
    const { duration, selected, playing } = this.state;

    const editor = selected && !!duration;

    return (
      <div className={cn(styles.container, className)}>
        <VideoPlayer
          video={video}
          playing={playing}
          limitFrom={startTime}
          start={selected && selected.start}
          stop={selected && selected.end}
          cursor={!selected}
          onReady={this.handleVideoReady}
          onTogglePlay={this.handleTogglePlay}
          onCursorClick={this.handleCursorClick}
        >
          {({ width }) => (
            <Fragment>
              {!editor &&
                tags.map(tag => (
                  <TimelineRange
                    key={tag.id}
                    start={tag.start}
                    end={tag.end}
                    timelineWidth={width}
                    duration={duration}
                  />
                ))}
              {editor && (
                <TimelineRangeEdit
                  timelineWidth={width}
                  start={selected.start}
                  end={selected.end}
                  duration={duration}
                  limitFrom={startTime}
                  onChange={this.handleRangeChange}
                  onDragging={this.handleRangeDragging}
                />
              )}
            </Fragment>
          )}
        </VideoPlayer>
        <div className={styles.tag}>
          {selected && (
            <EditTag
              options={options}
              duration={duration}
              tag={selected}
              limitFrom={startTime}
              onChange={this.handleChangeTag}
              onSave={this.handleSaveTag}
            />
          )}
          {!selected &&
            !!duration && (
              <div className={styles.placeholder}>Pick start time</div>
            )}
        </div>
        <div className={styles.tags}>
          <Tags
            tags={tags}
            onDelete={this.handleDeleteTag}
            onSelect={this.handleSelectTag}
          />
        </div>
      </div>
    );
  }
}
