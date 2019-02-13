import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Upload,
  UploadImagePreview,
  UploadProgressIndicator,
} from '@expandorg/components/app';

import { ReactComponent as Placeholder } from '@expandorg/uikit/assets/data.svg';

import { UploadState } from './FileUploadServiceBase';

import styles from './UploadControl.module.styl';

export default class UploadControl extends Component {
  static propTypes = {
    fileUploadService: PropTypes.object.isRequired, // eslint-disable-line
    value: PropTypes.string,
    sizeLimit: PropTypes.number,
    accept: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onNotify: PropTypes.func,
  };

  static defaultProps = {
    value: null,
    sizeLimit: undefined,
    accept: undefined,
    onNotify: Function.prototype,
  };

  state = {
    progress: 0,
    uploadState: UploadState.Initial,
  };

  uploadTask = null;

  componentWillUnmount() {
    if (this.uploadTask !== null) {
      this.uploadTask.cancel();
    }
  }

  handleAbort = () => {
    if (this.uploadTask !== null) {
      this.uploadTask.abort();
      this.setState({ progress: 0, uploadState: UploadState.Initial });
    }
  };

  handleProgress = progress => {
    this.setState({ progress });
  };

  handleSelect = async file => {
    const { onChange, fileUploadService } = this.props;
    const { uploadState } = this.state;

    if (uploadState !== UploadState.Uploading) {
      try {
        this.uploadTask = fileUploadService.getTask(file, this.handleProgress);

        this.setState({ uploadState: UploadState.Uploading, progress: 0 });
        const result = await this.uploadTask.upload();
        if (result) {
          this.setState({ uploadState: UploadState.Uploaded, progress: 0 });
          onChange(result.fileUrl);
        }
      } catch (e) {
        this.setState({ uploadState: UploadState.UploadError, progress: 0 });
      } finally {
        this.uploadTask = null;
      }
    }
  };

  handleReject = () => {
    const { accept, onNotify } = this.props;
    const message = `Filetype is not supported. Only ${accept} are supported. Please try again.`;
    onNotify('error', message);
  };

  render() {
    const { value, accept, sizeLimit } = this.props;
    const { uploadState, progress } = this.state;

    const isUploading = uploadState === UploadState.Uploading;
    const isUploaded = uploadState === UploadState.Uploaded;
    const isUploadError = uploadState === UploadState.UploadError;

    const indicator = isUploading || isUploadError;

    return (
      <Upload
        className={styles.upload}
        accept={accept}
        maxSize={sizeLimit}
        onSelect={this.handleSelect}
        onReject={this.handleReject}
      >
        {() => (
          <>
            {indicator && (
              <UploadProgressIndicator
                isUploading={isUploading}
                isUploaded={isUploaded}
                isUploadError={isUploadError}
                progress={progress}
                onAbort={this.handleAbort}
              />
            )}
            {!indicator &&
              (value ? (
                <UploadImagePreview uploadedUrl={value} />
              ) : (
                <div className={styles.placeholder}>
                  <Placeholder
                    viewBox="0 0 80 56"
                    width={45}
                    height={36}
                    className={styles.hint}
                  />
                  <div className={styles.or}>Drag a file or</div>
                  <div className={styles.browse}>Browse</div>
                </div>
              ))}
          </>
        )}
      </Upload>
    );
  }
}
