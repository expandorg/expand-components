import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Title from '../Title';
import Paragraph from '../Paragraph';
import Alignment from '../../components/Alignment';
import Image from '../Image';

import styles from './Article.module.styl';

export default class Article extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    wide: PropTypes.bool,
  };

  static defaultProps = {
    title: '',
    content: '',
    image: null,
    wide: false,
  };

  static module = {
    type: 'article',
    editor: {
      defaults: {
        title: 'article title',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      },
    },
  };

  render() {
    const { title, image, content, wide } = this.props;
    return (
      <Alignment padding="small">
        <Alignment vertical>
          <Alignment padding="small">
            <Title title={title} />
          </Alignment>
          <Alignment padding="small">
            <Paragraph
              className={cn({ [styles.shrinked]: wide ? false : !image })}
              content={content}
            />
          </Alignment>
        </Alignment>

        {image && <Image src={image} />}
      </Alignment>
    );
  }
}
