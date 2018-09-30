import React, { Component } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import { removeAtIndex, replaceAtIndex } from '../../../common/immutable';
import { tagId } from './clip';
import VideoPreview from './player/VideoPreview';
import Timeline from './timeline/Timeline';
import Tags from './tags/Tags';
import EditTag from './tags/EditTag';

import styles from './TagVideo.module.styl';

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
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    tags: [],
  };

  state = {
    duration: 0,
    seek: 0,
    selected: null,
    playing: true,
    ready: false,
  };

  handleVideoReady = duration => {
    this.setState({ duration, ready: true });
  };

  handleVideoProgress = seek => {
    this.setState({ seek });
  };

  handleChangeTag = tag => {
    this.setState({ selected: tag });
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
    const { video, className, tags } = this.props;
    const { duration, seek, selected, playing, ready } = this.state;

    return (
      <div className={cn(styles.container, className)}>
        <div className={styles.content}>
          <div className={styles.video}>
            <VideoPreview
              src={video}
              start={selected && selected.start}
              stop={selected && selected.end}
              playing={playing}
              onVideoReady={this.handleVideoReady}
              onTogglePlay={this.handleTogglePlay}
              onVideoProgress={this.handleVideoProgress}
            />
          </div>
          <div className={styles.timeline}>
            <Timeline
              ready={ready}
              duration={duration}
              tag={selected}
              seek={seek}
              playing={playing}
              onTogglePlay={this.handleTogglePlay}
              onChangeTag={this.handleChangeTag}
              onRangeDragging={this.handleRangeDragging}
            />
          </div>
        </div>
        <div className={styles.tag}>
          {selected && (
            <EditTag
              duration={duration}
              tag={selected}
              onChange={this.handleChangeTag}
              onSave={this.handleSaveTag}
            />
          )}
          {!selected &&
            ready && <div className={styles.placeholder}>Pick start time</div>}
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
