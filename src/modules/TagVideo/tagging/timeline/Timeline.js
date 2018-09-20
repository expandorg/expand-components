import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import debounce from 'debounce';

import TimelineRange from './TimelineRange';
import Cursor from './Cursor';

import styles from './Timeline.module.styl';

const RESIZE_DEBOUNCE = 200;

export default class Timeline extends Component {
  static propTypes = {
    tag: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number,
      tag: PropTypes.string,
    }),
    duration: PropTypes.number,
    seek: PropTypes.number,
    onChangeTag: PropTypes.func.isRequired,
  };

  static defaultProps = {
    duration: 0,
    tag: null,
    seek: 0,
  };

  constructor(props) {
    super(props);

    this.getSliderSize = debounce(this.getSliderSize, RESIZE_DEBOUNCE);
    this.sliderRef = createRef();

    this.state = {
      width: 0,
    };
  }

  componentDidMount() {
    this.getSliderSize();
    window.addEventListener('resize', this.getSliderSize);
  }

  componentWillUnmount() {
    this.getSliderSize.clear();
    window.removeEventListener('resize', this.getSliderSize);
  }

  getSliderSize = () => {
    const { width } = this.sliderRef.current.getBoundingClientRect();
    this.setState({ width });
  };

  handleRangeChange = (start, end) => {
    const { onChangeTag, tag } = this.props;
    onChangeTag({ ...tag, start, end });
  };

  render() {
    const { duration, seek, tag } = this.props;
    const { width } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.slider} ref={this.sliderRef}>
          {tag && (
            <TimelineRange
              timelineWidth={width}
              start={tag.start}
              end={tag.end}
              duration={duration}
              onChange={this.handleRangeChange}
            />
          )}
          <Cursor duration={duration} seek={seek} />
        </div>
      </div>
    );
  }
}
