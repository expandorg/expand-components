import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {
  replaceAtIndex,
  removeAtIndex,
} from '@expandorg/components/src/common/immutable';

import SelectRegionBase from './SelectRegionBase';
import Selection from './Selection';
import ImageContainer from './ImageContainer';
import ValuesToggle from './ValuesToggle';

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
    displayToggle: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: null,
    values: [],
    readOnly: false,
    displayToggle: false,
  };

  state = {
    showValues: true,
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

  handleToggle = () => {
    this.setState(({ showValues }) => ({ showValues: !showValues }));
  };

  render() {
    const { src, values, className, readOnly, displayToggle } = this.props;
    const { showValues } = this.state;
    return (
      <ImageContainer className={className} src={src}>
        {({ imageWidth, width, height }) => (
          <SelectRegionBase
            readOnly={readOnly}
            className={cn(styles.region, { [styles.readOnly]: readOnly })}
            key={src}
            width={width}
            height={height}
            onSelectionEnd={rect => this.handleSelect(rect, width, imageWidth)}
          >
            {({ selection }) => (
              <>
                {showValues &&
                  values.map((value, index) => (
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
                {displayToggle && (
                  <ValuesToggle
                    onToggle={this.handleToggle}
                    value={showValues}
                  />
                )}
              </>
            )}
          </SelectRegionBase>
        )}
      </ImageContainer>
    );
  }
}
