import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import debounce from 'debounce';

import { getMousePosition } from '@gemsorg/components/src/common/dom';

const RESIZE_DEBOUNCE = 200;

export default class TimelineContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: null,
  };

  constructor(props) {
    super(props);

    this.getSliderSize = debounce(this.getSliderSize, RESIZE_DEBOUNCE);
    this.sliderRef = createRef();

    this.state = {
      width: 0,
      left: 0,
      mouseX: 0,
      isHovered: false,
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
    const el = this.sliderRef.current;
    const { left: cLeft, width } = el.getBoundingClientRect();

    const left = cLeft - el.scrollLeft - document.documentElement.clientLeft;

    this.setState({ width, left });
  };

  handleMove = evt => {
    const { left, isHovered } = this.state;
    if (isHovered) {
      const { x } = getMousePosition(evt);
      this.setState({ mouseX: x - left });
    }
  };

  handleEnter = () => {
    this.setState({ isHovered: true });
  };

  handleLeave = () => {
    this.setState({ isHovered: false, mouseX: 0 });
  };

  render() {
    const { children, className } = this.props;
    const { width, isHovered, mouseX } = this.state;
    return (
      <div
        className={className}
        ref={this.sliderRef}
        onMouseMove={this.handleMove}
        onMouseEnter={this.handleEnter}
        onMouseLeave={this.handleLeave}
      >
        {children({ width, isHovered, mouseX })}
      </div>
    );
  }
}
