import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import styles from './ImageContainer.module.styl';

export default class ImageContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    onImageLoaded: PropTypes.func,
  };

  static defaultProps = {
    className: null,
    onImageLoaded: Function.prototype,
  };

  imageRef = createRef();

  constructor(props) {
    super(props);
    this.state = {
      imageWidth: 0,
      imageHeight: 0,
      src: props.src,
    };
  }

  static getDerivedStateFromProps({ src }, state) {
    if (src !== state.src) {
      return {
        imageWidth: 0,
        imageHeight: 0,
        src,
      };
    }
    return null;
  }

  componentDidMount() {
    this.getImageSize();
  }

  handleLoad = () => {
    this.getImageSize();
  };

  getImageSize = () => {
    const { onImageLoaded } = this.props;
    const { imageWidth, imageHeight } = this.state;
    if (!imageWidth || !imageHeight) {
      const { naturalWidth, naturalHeight } = this.imageRef.current;
      if (naturalWidth && naturalHeight) {
        this.setState({ imageWidth: naturalWidth, imageHeight: naturalHeight });
        onImageLoaded(naturalWidth, naturalHeight);
      }
    }
  };

  render() {
    const { children, className } = this.props;
    const { imageWidth, imageHeight, src } = this.state;
    return (
      <div className={cn(styles.container, className)}>
        <img
          src={src}
          ref={this.imageRef}
          className={styles.image}
          alt="content"
          onLoad={this.handleLoad}
        />
        {children({ imageWidth, imageHeight })}
      </div>
    );
  }
}
