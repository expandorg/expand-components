import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';
import { useExecutionContext } from '../../form/components/ExecutionContext';

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

export default function UploadFile({ value, fileType, size, name, onChange }) {
  const { services, onNotify } = useExecutionContext();

  const change = useCallback(
    val => {
      onChange(name, val);
    },
    [name, onChange]
  );

  if (!services.has('fileUpload')) {
    return null;
  }

  return (
    <div className={styles.container}>
      <UploadControl
        fileUploadService={services.get('fileUpload')}
        onChange={change}
        value={value}
        sizeLimit={fileSizes[size]}
        accept={mediaTypes[fileType]}
        onNotify={onNotify}
      />
    </div>
  );
}

UploadFile.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  fileType: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

UploadFile.defaultProps = {
  value: null,
  fileType: 'Any',
  size: 'Large',
};

UploadFile.module = {
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
