import React from 'react';
import PropTypes from 'prop-types';

import Iframe from '../../components/Iframe';

import {
  PropControlTypes,
  ModuleCategories,
} from '../../form/components/Module';

import styles from './Iframe.module.styl';

export default function IframeModule({ src, title }) {
  if (!src) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Iframe
        title={title}
        className={styles.iframe}
        src={src}
        width="100%"
        height="400px"
      />
    </div>
  );
}

IframeModule.module = {
  type: 'iframe',
  name: 'Iframe',
  editor: {
    category: ModuleCategories.Display,
    properties: {
      src: {
        type: PropControlTypes.string,
        placeholder: 'Iframe url',
        required: true,
      },
      title: {
        type: PropControlTypes.string,
        placeholder: 'Iframe title',
      },
    },
    defaults: {
      src: '',
    },
  },
};

IframeModule.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
};

IframeModule.defaultProps = {
  src: null,
  title: '',
};
