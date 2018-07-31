import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Title from '../Title';
import Paragraph from '../Paragraph';
import Alignment from '../Alignment';
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
  };

  static defaultProps = {
    wide: false,
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
            >
              {content}
            </Paragraph>
          </Alignment>
        </Alignment>

        {image && <Image src={image} />}
      </Alignment>
    );
  }
}
