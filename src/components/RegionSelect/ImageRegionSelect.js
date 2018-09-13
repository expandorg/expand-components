import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import SelectRegionBase from './SelectRegionBase';
import Selection from './Selection';
import ImageContainer from './ImageContainer';

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
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    className: null,
  };

  handleSelect = (selection, width, imageWidth) => {
    const { onChange } = this.props;
    onChange(fixRatio(selection, imageWidth, width));
  };

  handleResize = (selection, width, imageWidth) => {
    const { onChange } = this.props;
    onChange(fixRatio(selection, imageWidth, width));
  };

  render() {
    const { src, className, value } = this.props;
    return (
      <ImageContainer className={className} src={src}>
        {({ imageWidth }) => (
          <SelectRegionBase
            key={src}
            className={styles.region}
            onSelectionEnd={(rect, width) =>
              this.handleSelect(rect, width, imageWidth)
            }
          >
            {({ selection, width, height }) => (
              <Fragment>
                {selection ? (
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
                    editable
                    onResize={resized =>
                      this.handleResize(resized, width, imageWidth)
                    }
                  />
                )}
              </Fragment>
            )}
          </SelectRegionBase>
        )}
      </ImageContainer>
    );
  }
}
