import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DragHandler from './DragHandler';

import { normalizeRect } from './rect';

const createRect = ({ x1, x2, y1, y2 }) => ({
  left: Math.min(x1, x2),
  top: Math.min(y1, y2),
  width: Math.abs(x1 - x2),
  height: Math.abs(y1 - y2),
});

export default class Selection extends Component {
  static propTypes = {
    selection: PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    }),
    cWidth: PropTypes.number,
    cHeight: PropTypes.number,
    editable: PropTypes.bool,
    onDelete: PropTypes.func,
    onResize: PropTypes.func,
  };

  static defaultProps = {
    selection: null,
    cWidth: 0,
    cHeight: 0,
    editable: false,
    onResize: Function.prototype,
    onDelete: Function.prototype,
  };

  constructor(props) {
    super(props);

    this.state = {
      original: props.selection,
      selection: props.selection,
      rect: normalizeRect(props.selection, props.cWidth, props.cHeight),
    };
  }

  static getDerivedStateFromProps({ selection: next, cWidth, cHeight }, state) {
    if (next !== state.original) {
      return {
        selection: next,
        original: next,
        rect: normalizeRect(next, cWidth, cHeight),
      };
    }
    return null;
  }

  handleDelete = evt => {
    evt.preventDefault();
    const { onDelete } = this.props;
    onDelete();
  };

  handleDrag = (dx, dy, xCord, yCord) => {
    const { cWidth, cHeight } = this.props;
    const { selection } = this.state;
    const resized = {
      ...selection,
      [xCord]: selection[xCord] + dx,
      [yCord]: selection[yCord] + dy,
    };

    this.setState({
      selection: resized,
      rect: normalizeRect(resized, cWidth, cHeight),
    });
  };

  handleDragEnd = () => {
    const { onResize } = this.props;
    const { rect } = this.state;
    onResize(rect);
  };

  render() {
    const { editable } = this.props;
    const { rect } = this.state;
    if (!rect) {
      return null;
    }
    const style = createRect(rect);
    return (
      <div className="gem-selectregion-selection" style={style}>
        {editable && (
          <>
            <div className="gem-selectregion-selection-cliparea" />
            <button
              className="gem-selectregion-delete"
              onClick={this.handleDelete}
            >
              ✕
            </button>
            <DragHandler
              x={0}
              y={0}
              xC="x1"
              yC="y1"
              onDrag={this.handleDrag}
              onDragEnd={this.handleDragEnd}
            />
            <DragHandler
              x={style.width}
              y={0}
              xC="x2"
              yC="y1"
              onDrag={this.handleDrag}
              onDragEnd={this.handleDragEnd}
            />
            <DragHandler
              x={0}
              y={style.height}
              xC="x1"
              yC="y2"
              onDrag={this.handleDrag}
              onDragEnd={this.handleDragEnd}
            />
            <DragHandler
              x={style.width}
              y={style.height}
              xC="x2"
              yC="y2"
              onDrag={this.handleDrag}
              onDragEnd={this.handleDragEnd}
            />
          </>
        )}
      </div>
    );
  }
}
