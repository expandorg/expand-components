import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import Alignment from '../Alignment';

export default class Submit extends PureComponent {
  static propTypes = {
    caption: PropTypes.string.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { caption, isSubmitting, onSubmit } = this.props;
    return (
      <Alignment padding="small">
        <Button
          onClick={onSubmit}
          size="large"
          theme="pink"
          type="submit"
          disabled={isSubmitting}
        >
          {caption}
        </Button>
      </Alignment>
    );
  }
}
