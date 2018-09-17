import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { replaceAtIndex, removeAtIndex } from '../../common/immutable';

import SelectRegionBase from './SelectRegionBase';
import Selection from './Selection';
import ImageContainer from './ImageContainer';

import { fixRatio } from './rect';

import styles from './ImageRegionSelect.module.styl';

const getKey = ({ x1, y1, x2, y2 }) => `${x1}-${y1}-${x2}-${y2}`;

export default class ImageRegionMultiselect extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        x1: PropTypes.number,
        y1: PropTypes.number,
        x2: PropTypes.number,
        y2: PropTypes.number,
      })
    ),
    readOnly: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    values: [],
    readOnly: false,
  };

  handleSelect = (selection, width, imageWidth) => {
    const { onChange, values } = this.props;
    if (selection) {
      onChange(values.concat(fixRatio(selection, imageWidth, width)));
    }
  };

  handleDelete = index => {
    const { onChange, values } = this.props;
    onChange(removeAtIndex(values, index));
  };

  handleResize = (selection, width, imageWidth, index) => {
    const { onChange, values } = this.props;
    onChange(
      replaceAtIndex(values, index, fixRatio(selection, imageWidth, width))
    );
  };

  render() {
    const { src, values, className, readOnly } = this.props;
    return (
      <ImageContainer className={className} src={src}>
        {({ imageWidth, width, height }) => (
          <SelectRegionBase
            readOnly={readOnly}
            className={styles.region}
            key={src}
            width={width}
            height={height}
            onSelectionEnd={rect => this.handleSelect(rect, width, imageWidth)}
          >
            {({ selection }) => (
              <Fragment>
                {values.map((value, index) => (
                  <Selection
                    selection={fixRatio(value, width, imageWidth)}
                    cWidth={width}
                    cHeight={height}
                    key={getKey(value)}
                    editable={!readOnly}
                    onDelete={() => this.handleDelete(index)}
                    onResize={resized =>
                      this.handleResize(resized, width, imageWidth, index)
                    }
                  />
                ))}
                <Selection
                  selection={selection}
                  cWidth={width}
                  cHeight={height}
                />
              </Fragment>
            )}
          </SelectRegionBase>
        )}
      </ImageContainer>
    );
  }
}
