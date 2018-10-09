import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SignleTagVideo from './components/SignleTagVideo';

export default class TagVideo extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      tag: PropTypes.string,
    }),
    readOnly: PropTypes.bool,
    initial: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number.isRequired,
      tag: PropTypes.string,
    }),
    options: PropTypes.arrayOf(PropTypes.string),
    startTime: PropTypes.number,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: null,
    initial: null,
    readOnly: false,
    options: [],
    startTime: undefined,
  };

  static module = {
    type: 'tagVideo',
    validation: {
      isRequired: value => {
        if (!value) {
          return false;
        }
        if (!value.tag) {
          return false;
        }
        return true;
      },
    },
    report: ['video is not loading'],
    editor: {
      defaults: {
        src: 'https://www.youtube.com/watch?v=PXi3Mv6KMzY',
      },
    },
  };

  handleChange = tag => {
    const { name, onChange } = this.props;
    onChange(name, tag);
  };

  render() {
    const { src, value, options, initial, readOnly, startTime } = this.props;
    const tag = readOnly ? initial : value;

    return (
      <SignleTagVideo
        key={src}
        startTime={startTime}
        video={src}
        readOnly={readOnly}
        tag={tag}
        options={options}
        onChange={this.handleChange}
      />
    );
  }
}
