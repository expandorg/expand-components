import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '@expandorg/validation';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './UploadFile.module.styl';

export default class UploadFile extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    fileType: PropTypes.string,
    size: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    fileType: 'Any',
    size: 'Large',
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
        size: 'large',
      },
    },
  };

  handleChange = value => {
    const { name, onChange } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, fileType, size } = this.props;

    return <div className={styles.container} />;
  }
}
