// @flow
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import debounce from 'debounce';

import Draggable from '../Draggable';
import Progress from '../Progress';

import { getMousePosition } from '../../common/dom';

import { getStyles, positionToValue } from './position';

import './Slider.styl';

const RESIZE_DEBOUNCE = 250;

export default class Slider extends Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    vertical: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    value: 0,
    min: 0,
    max: 100,
    step: 0.01,
    vertical: false,
    disabled: false,
  };

  constructor(props) {
    super(props);

    this.containerRef = createRef();
    this.handleResize = debounce(this.handleResize, RESIZE_DEBOUNCE);

    this.state = { len: 0, start: 0 };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.handleResize.clear();
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const { vertical } = this.props;
    if (this.containerRef.current) {
      const {
        left,
        right,
        top,
        bottom,
      } = this.containerRef.current.getBoundingClientRect();

      const start = vertical ? top : left;
      const len = vertical ? bottom - top : right - left;

      this.setState({ start, len });
    }
  };

  handleDrag = (dx, dy, event) => {
    const { value, onChange, max, min, step, disabled, vertical } = this.props;
    const { start, len } = this.state;

    if (!disabled) {
      const moved = positionToValue(
        getMousePosition(event),
        max,
        min,
        step,
        start,
        len,
        vertical
      );
      if (value !== moved) {
        onChange(moved);
      }
    }
  };

  render() {
    const { className, vertical, value, max, min } = this.props;

    const classes = cn(
      'gem-slider',
      {
        'gem-slider--horizontal': !vertical,
        'gem-slider--vertical': vertical,
      },
      className
    );

    return (
      <div className={classes} ref={this.containerRef}>
        {/* <Draggable
          onDrag={this.handleDrag}
          onDragStart={event => this.handleDrag(0, 0, event)}
          className="gem-slider-inner"
        > */}
        <Progress
          className="gem-slider-progress"
          vertical={vertical}
          max={max}
          min={min}
          value={value}
        />
        {/* </Draggable> */}
        <Draggable
          style={getStyles(max, min, value, vertical)}
          className="gem-slider-handler"
          onDrag={this.handleDrag}
        />
      </div>
    );
  }
}
