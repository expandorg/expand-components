import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Upload,
  UploadImagePreview,
  UploadProgressIndicator,
} from '@expandorg/components/app';

import { ReactComponent as Placeholder } from '@expandorg/uikit/assets/data.svg';

import FileUploadServiceBase from './FileUploadServiceBase';

import styles from './UploadControl.module.styl';

export default class UploadControl extends Component {
  static propTypes = {
    fileUploadService: PropTypes.instanceOf(FileUploadServiceBase).isRequired,
    value: PropTypes.string,
    sizeLimit: PropTypes.number,
    accept: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onNotify: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    sizeLimit: null,
    accept: null,
  };

  state = {
    progress: 0,
    isUploading: false,
    isUploaded: false,
    isUploadError: false,
  };

  handleProgress = progress => {
    this.setState({ progress });
  };

  handleAbort = () => {
    if (this.uploadProgress) {
      this.uploadProgress.abortRequest();
    }
  };

  handleSelect = async () => {
    // const { onChange, fileUploadService } = this.props;
    // const { isUploading } = this.state;
    // if (!isUploading) {
    //   try {
    //     this.setState({ isUploading: true, progress: 0 });
    //     this.uploadProgress = new fileUploadService.beginUpload(
    //       this.handleProgress
    //     );
    //     const { fileUrl } = await imagesApi.upload({
    //       thumbnail,
    //       cb: this.progress,
    //     });
    //     onChange(fileUrl);
    //     this.setState({ isUploading: false, isUploaded: true, progress: 0 });
    //   } catch (e) {
    //     this.setState({ isUploading: false, isUploadError: true });
    //   }
    // }
  };

  handleReject = () => {
    const { accept, onNotify } = this.props;
    const message = `Filetype is not supported. Only ${accept} are supported. Please try again.`;
    onNotify('error', message);
  };

  render() {
    const { value, accept, sizeLimit } = this.props;
    const { isUploading, isUploaded, isUploadError, progress } = this.state;
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
