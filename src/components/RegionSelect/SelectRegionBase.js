import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import debounce from 'debounce';

import cn from 'classnames';

import { stopEvt, getElementOffset, getMousePosition } from '../../common/dom';

import normalizeSelection from './normalizeSelection';

import './styles.styl';

const RESIZE_DEBOUNCE = 300;

const validate = (r, size) =>
  !r || (Math.abs(r.x2 - r.x1) >= size && Math.abs(r.y2 - r.y1) >= size);

export default class SelectRegionBase extends Component {
  static propTypes = {
    className: PropTypes.string,
    onSelectionBegin: PropTypes.func,
    minSize: PropTypes.number,
    onSelection: PropTypes.func,
    onSelectionEnd: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    minSize: 10,
    onSelectionBegin: Function.prototype,
    onSelection: Function.prototype,
    onSelectionEnd: Function.prototype,
  };

  constructor(props) {
    super(props);
    this.container = createRef();

    this.handleResize = debounce(this.handleResize, RESIZE_DEBOUNCE);

    this.state = {
      pressed: false,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      selection: null,
      normalized: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    this.handleResize.clear();

    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown = evt => {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);

    const { onSelectionBegin } = this.props;

    const { top, left } = getElementOffset(this.container.current);
    const { x, y } = getMousePosition(evt);
    const selection = { x1: x - left, y1: y - top };

    this.setState(
      {
        pressed: true,
        top,
        left,
        selection,
      },
      () => onSelectionBegin(selection)
    );
    stopEvt(evt);
  };

  handleMouseMove = evt => {
    const { onSelection } = this.props;
    const {
      pressed,
      top,
      left,
      selection: { x1, y1 },
      width,
      height,
    } = this.state;

    if (pressed) {
      stopEvt(evt);
      const { x, y } = getMousePosition(evt);
      const selection = { x1, y1, x2: x - left, y2: y - top };
      const normalized = normalizeSelection(selection, width, height);
      this.setState({ selection, normalized }, () =>
        onSelection(normalized, width, height)
      );
    }
  };

  handleResize = () => {
    if (this.container.current) {
      const { width, height } = this.container.current.getBoundingClientRect();
      this.setState({ width, height });
    }
  };

  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);

    const { onSelectionEnd, minSize } = this.props;
    const { width, height, normalized } = this.state;
    this.setState({ pressed: false, selection: null, normalized: null });
    if (validate(normalized, minSize)) {
      onSelectionEnd(normalized, width, height);
    }
  };

  render() {
    const { children, className } = this.props;
    const { normalized, width, height } = this.state;

    return (
      <div
        ref={this.container}
        className={cn('gem-selectregion', className)}
        onMouseDown={this.handleMouseDown}
      >
        {children({
          width,
          height,
          selection: normalized,
        })}
      </div>
    );
  }
}
