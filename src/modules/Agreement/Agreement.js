import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rules } from '../../common/validation';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

import Alignment from '../Alignment';
import Modal from '../Modal';

export default class Agreement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    button: PropTypes.string,
    label: PropTypes.string.isRequired,
    headline: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: false,
    button: null,
    headline: null,
  };

  static module = {
    type: 'agreement',
    validation: {
      isTrue: rules.isTrue,
    },
    editor: {
      defaults: {
        button: 'Rules',
        label: 'You must agree with rules',
        headline: 'question title',
        modules: {
          name: 'p',
          type: 'paragraph',
          content: 'Lorem ipsum dolor sit amet, consectetur',
        },
      },
    },
  };

  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  render() {
    const {
      value,
      name,
      button,
      children,
      headline,
      label,
      onChange,
    } = this.props;
    const { visible } = this.state;
    return (
      <Alignment padding="small" vCenter>
        {button && (
          <Button size="medium" theme="blue" onClick={this.handleToggle}>
            {button}
          </Button>
        )}
        <Checkbox
          name={name}
          label={label}
          value={value}
          onChange={changed => onChange(name, changed)}
        />
        {button && (
          <Modal
            visible={visible}
            onHide={this.handleToggle}
            headline={headline}
            button="Close"
          >
            {children}
          </Modal>
        )}
      </Alignment>
    );
  }
}
