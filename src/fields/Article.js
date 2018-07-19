import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { fieldProps } from './propTypes';

import Title from './ui/Title';
import Paragraph from './ui/Paragraph';
import Alignment from './ui/Alignment';
import Image from './ui/Image';

import styles from './Article.module.styl';

export default class Article extends Component {
  static propTypes = {
    field: PropTypes.shape(fieldProps).isRequired,
    wide: PropTypes.bool,
  };

  static defaultProps = {
    wide: false,
  };

  render() {
    const {
      field: { title, image, content },
      wide,
    } = this.props;
    return (
      <Alignment padding="small">
        <Alignment vertical>
          <Alignment padding="small">
            <Title>{title}</Title>
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
