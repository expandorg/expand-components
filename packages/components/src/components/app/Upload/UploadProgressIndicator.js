import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './UploadProgressIndicator.styl';

export default class UploadProgressIndicator extends Component {
  static propTypes = {
    className: PropTypes.string,

    isUploading: PropTypes.bool,
    isUploaded: PropTypes.bool,
    isUploadError: PropTypes.bool,

    progress: PropTypes.number,
    onAbort: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isUploading: false,
    isUploaded: false,
    isUploadError: false,
    progress: 0,
    className: null,
  };

  handleAbort = evt => {
    evt.preventDefault();

    const { isUploading, onAbort } = this.props;
    if (isUploading) {
      onAbort();
    }
  };

  render() {
    const {
      isUploading,
      isUploaded,
      isUploadError,
      progress,
      className,
    } = this.props;

    const progressClasses = cn('gem-uploadprogress-indicator', {
      'gem-uploadprogress-indicator--fetching': isUploading,
      'gem-uploadprogress-indicator--fetched': isUploaded,
      'gem-uploadprogress-indicator--error': isUploadError,
    });

    const width = `${Math.floor(progress * 100)}%`;
    const opacity = Math.min(progress * 10, 1);

    return (
      <div className={cn('gem-uploadprogress', className)}>
        <div className={progressClasses} style={{ width }}>
          <div className="gem-uploadprogress-percent" style={{ opacity }}>
            {Math.ceil(progress * 100)}%
          </div>
        </div>
        {isUploading && (
          <button
            className="gem-uploadprogress-cancel"
            onClick={this.handleAbort}
          >
            cancel
          </button>
        )}
      </div>
    );
  }
}
