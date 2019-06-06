import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import debounce from 'debounce';

import { VarsPlaceholder } from '@expandorg/components';

import cn from 'classnames';

import styles from './ImageContainer.module.styl';

const RESIZE_DEBOUNCE = 250;

export default class ImageContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    isModulePreview: PropTypes.bool,
    onImageLoaded: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    isModulePreview: false,
    onImageLoaded: Function.prototype,
  };

  imageRef = createRef();

  constructor(props) {
    super(props);

    this.getImageSize = debounce(this.getImageSize, RESIZE_DEBOUNCE);

    this.state = {
      imageWidth: 0,
      imageHeight: 0,
      src: props.src,
    };
  }

  static getDerivedStateFromProps({ src }, state) {
    if (src !== state.src) {
      return {
        width: 0,
        height: 0,
        imageWidth: 0,
        imageHeight: 0,
        src,
      };
    }
    return null;
  }

  componentDidMount() {
    this.getImageSize();
    window.addEventListener('resize', this.getImageSize);
  }

  componentWillUnmount() {
    this.getImageSize.clear();
    window.removeEventListener('resize', this.getImageSize);
  }

  handleLoad = () => {
    this.getImageSize();
  };

  getImageSize = () => {
    if (this.imageRef.current) {
      const { naturalWidth, naturalHeight } = this.imageRef.current;

      if (naturalWidth && naturalHeight) {
        const { width, height } = this.imageRef.current.getBoundingClientRect();
        const { onImageLoaded } = this.props;

        this.setState({
          width,
          height,
          imageWidth: naturalWidth,
          imageHeight: naturalHeight,
        });
        onImageLoaded(naturalWidth, naturalHeight, width, height);
      }
    }
  };

  render() {
    const { children, className, isModulePreview } = this.props;
    const { imageWidth, imageHeight, width, height, src } = this.state;
    return (
      <div className={cn(styles.container, className)}>
        <img
          src={src}
          ref={this.imageRef}
          className={styles.image}
          alt="content"
          onLoad={this.handleLoad}
        />
        {children({ imageWidth, imageHeight, width, height })}
        <VarsPlaceholder vval={src} isModulePreview={isModulePreview} />
      </div>
    );
  }
}
