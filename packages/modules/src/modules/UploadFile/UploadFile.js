import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import { ExecutionContextClient } from '../../form/components/ExecutionContext';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import UploadControl from './UploadControl';

import styles from './UploadFile.module.styl';

const mediaTypes = {
  Any: undefined,
  Images: 'image/jpeg, image/png, image/gif, image/svg+xml',
  Media:
    'image/jpeg, image/png, image/gif, image/svg+xml, audio/basic, audio/mp4, audio/mpeg, video/mpeg, video/mp4',
  Documents: 'text/csv, application/pdf, text/plain, text/markdown',
};

const fileSizes = {
  Large: undefined,
  Medium: undefined,
  Small: undefined,
};

export default class UploadFile extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    fileType: PropTypes.string,
    size: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onNotify: PropTypes.func,
  };

  static defaultProps = {
    value: null,
    fileType: 'Any',
    size: 'Large',
    onNotify: Function.prototype,
  };

  static module = {
    type: 'upload',
    name: 'File Upload',
    isInput: true,
    validation: {
      isRequired: rules.isRequired,
    },
    editor: {
      category: ModuleCategories.Input,
      properties: {
        fileType: {
          type: PropControlTypes.enum,
          label: 'File type',
          options: ['Images', 'Media', 'Text', 'Any'],
        },
        size: {
          type: PropControlTypes.enum,
          label: 'File size',
          options: ['Large', 'Medium', 'Small'],
        },
      },
      defaults: {
        fileType: 'Any',
        size: 'Large',
      },
    },
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, fileType, size, onNotify } = this.props;

    return (
      <ExecutionContextClient>
        {({ services }) => {
          if (!services.has('fileUpload')) {
            return null;
          }

          return (
            <div className={styles.container}>
              <UploadControl
                fileUploadService={services.get('fileUpload')}
                onChange={this.handleChange}
                value={value}
                sizeLimit={fileSizes[size]}
                accept={mediaTypes[fileType]}
                onNotify={onNotify}
              />
            </div>
          );
        }}
      </ExecutionContextClient>
    );
  }
}
