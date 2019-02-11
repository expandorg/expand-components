import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './UploadImagePreview.styl';

export default class UploadImagePreview extends Component {
  static propTypes = {
    file: PropTypes.shape({
      name: PropTypes.string,
    }),
    className: PropTypes.string,
    uploadedUrl: PropTypes.string,
    title: PropTypes.string,
  };

  static defaultProps = {
    file: null,
    className: null,
    uploadedUrl: null,
    title: 'Upload image',
  };

  constructor(props) {
    super(props);
    this.state = {
      file: props.file, // eslint-disable-line react/no-unused-state
      preview: props.file ? URL.createObjectURL(props.file) : null,
    };
  }

  static getDerivedStateFromProps({ file }, state) {
    if (file !== state.file) {
      if (state.preview) {
        URL.revokeObjectURL(state.preview);
      }
      return {
        file,
        preview: file ? URL.createObjectURL(file) : null,
      };
    }
    return null;
  }

  render() {
    const { uploadedUrl, className, title } = this.props;

    const { preview } = this.state;
    return (
      <div className={cn('gem-uploadpreview', className)}>
        <img
          className="gem-uploadpreview-preview"
          src={preview || uploadedUrl}
          alt="Preview"
        />
        <div className="gem-uploadpreview-hint">{title}</div>
      </div>
    );
  }
}
