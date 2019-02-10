import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

import styles from './Audio.module.styl';

export default class Audio extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    src: PropTypes.string.isRequired,
    onModuleError: PropTypes.func.isRequired,
  };

  static defaultProps = {
    autoPlay: false,
    loop: false,
  };

  static module = {
    type: 'audio',
    name: 'Audio',
    report: ['auido is not loading'],
    editor: {
      category: ModuleCategories.Media,
      properties: {
        src: {
          type: PropControlTypes.string,
          placeholder: 'Audo src',
          required: true,
        },
        autoPlay: {
          type: PropControlTypes.boolean,
          label: 'Automatically play',
        },
        loop: {
          type: PropControlTypes.boolean,
          label: 'Loop',
        },
      },
      defaults: {
        loop: false,
        autoPlay: false,
        src: 'http://media.gettyimages.com/videos/cap-video-id896606100',
      },
    },
  };

  constructor(props) {
    super(props);
    this.player = createRef();

    this.state = {
      loadError: false,
    };
  }

  handleError = () => {
    const { onModuleError, name, src } = this.props;
    this.setState({ loadError: true });
    onModuleError(`${name}: Error while loading video ${src}`);
  };

  render() {
    const { src, autoPlay, loop } = this.props;

    const { loadError } = this.state;

    console.log(src, autoPlay, loop, loadError);

    return (
      <div className={styles.container}>
        <div className={styles.content} />
      </div>
    );
  }
}
