import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import DragHandler from './DragHandler';

const createRect = ({ x1, x2, y1, y2 }) => ({
  left: Math.min(x1, x2),
  top: Math.min(y1, y2),
  width: Math.abs(x1 - x2),
  height: Math.abs(y1 - y2),
});

const normalizeSelection = selection => {
  if (!selection) {
    return selection;
  }
  return {
    x1: Math.min(selection.x1, selection.x2),
    y1: Math.min(selection.y1, selection.y2),
    x2: Math.max(selection.x1, selection.x2),
    y2: Math.max(selection.y1, selection.y2),
  };
};

export default class Selection extends Component {
  static propTypes = {
    selection: PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    }),
    resize: PropTypes.bool,
    onResize: PropTypes.func,
  };

  static defaultProps = {
    selection: null,
    resize: false,
    onResize: Function.prototype,
  };

  constructor(props) {
    super(props);

    this.state = {
      selection: normalizeSelection(props.selection),
    };
  }

  componentWillReceiveProps({ selection: nextSelection }) {
    const { selection } = this.props;
    if (nextSelection !== selection) {
      this.setState({ selection: normalizeSelection(nextSelection) });
    }
  }

  handleDrag = (dx, dy, xCord, yCord) => {
    const { selection } = this.state;
    this.setState({
      selection: {
        ...selection,
        [xCord]: selection[xCord] + dx,
        [yCord]: selection[yCord] + dy,
      },
    });
  };

  handleDragEnd = () => {
    const { onResize } = this.props;
    const { selection } = this.state;
    onResize(selection);
  };

  render() {
    const { resize } = this.props;
    const { selection } = this.state;
    if (!selection) {
      return null;
    }
    const style = createRect(selection);
    return (
      <div className="gem-selectregion-selection" style={style}>
        {resize && (
          <Fragment>
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
          </Fragment>
        )}
      </div>
    );
  }
}
