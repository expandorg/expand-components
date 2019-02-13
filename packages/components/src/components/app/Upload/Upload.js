import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Dropzone from 'react-dropzone';

import './Upload.styl';

export default class Upload extends Component {
  static propTypes = {
    file: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.arrayOf(PropTypes.object),
    ]),
    maxSize: PropTypes.number,
    accept: PropTypes.string,
    multiple: PropTypes.bool,
    className: PropTypes.string,
    isUploading: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    onReject: PropTypes.func,
  };

  static defaultProps = {
    file: null,
    multiple: false,
    maxSize: undefined,
    className: null,
    accept: undefined,
    isUploading: false,
    onReject: Function.prototype,
  };

  handleDrop = (acceptedFiles, rejectedFiles) => {
    const { onSelect, onReject, accept, multiple } = this.props;
    if (rejectedFiles.length) {
      onReject(rejectedFiles, accept);
      return;
    }
    if (!acceptedFiles.length) {
      return;
    }

    if (multiple) {
      onSelect(acceptedFiles);
    } else {
      onSelect(acceptedFiles[0]);
    }
  };

  render() {
    const {
      children,
      file,
      isUploading,
      className,
      accept,
      multiple,
      maxSize,
    } = this.props;

    return (
      <Dropzone
        accept={accept}
        maxSize={maxSize}
        multiple={multiple}
        disabled={isUploading}
        onDrop={this.handleDrop}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div
            {...getRootProps()}
            className={cn('gem-dropzone', className, {
              'gem-dropdzone--uploading': isUploading,
              'gem-dropdzone--active': isDragActive,
            })}
          >
            <input {...getInputProps()} className="gem-dropdzone-input" />
            {children({ file })}
          </div>
        )}
      </Dropzone>
    );
  }
}
