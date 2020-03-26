import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import SelectRegionBase from './SelectRegionBase';
import Selection from './Selection';
import ImageContainer from './ImageContainer';
import ValuesToggle from './ValuesToggle';

import { fixRatio } from './rect';

import styles from './ImageRegionSelect.module.styl';

export default class ImageRegionSelect extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    value: PropTypes.shape({
      x1: PropTypes.number,
      y1: PropTypes.number,
      x2: PropTypes.number,
      y2: PropTypes.number,
    }),
    readOnly: PropTypes.bool,
    displayToggle: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    className: null,
    readOnly: false,
    displayToggle: false,
  };

  state = {
    showValue: true,
  };

  handleSelect = (selection, width, imageWidth) => {
    const { onChange } = this.props;
    onChange(fixRatio(selection, imageWidth, width));
  };

  handleResize = (selection, width, imageWidth) => {
    const { onChange } = this.props;
    onChange(fixRatio(selection, imageWidth, width));
  };

  handleToggle = () => {
    this.setState(({ showValue }) => ({ showValue: !showValue }));
  };

  render() {
    const { src, className, value, readOnly, displayToggle } = this.props;
    const { showValue } = this.state;
    return (
      <ImageContainer className={className} src={src}>
        {({ imageWidth, width, height }) => (
          <>
            <SelectRegionBase
              key={src}
              readOnly={readOnly}
              width={width}
              height={height}
              className={cn(styles.region, { [styles.readOnly]: readOnly })}
              onSelectionEnd={(rect) =>
                this.handleSelect(rect, width, imageWidth)
              }
            >
              {({ selection }) =>
                showValue &&
                (selection ? (
                  <Selection
                    selection={selection}
                    cWidth={width}
                    cHeight={height}
                  />
                ) : (
                  <Selection
                    selection={fixRatio(value, width, imageWidth)}
                    cWidth={width}
                    cHeight={height}
                    editable={!readOnly}
                    onResize={(resized) =>
                      this.handleResize(resized, width, imageWidth)
                    }
                  />
                ))
              }
            </SelectRegionBase>
            {displayToggle && (
              <ValuesToggle onToggle={this.handleToggle} value={showValue} />
            )}
          </>
        )}
      </ImageContainer>
    );
  }
}
