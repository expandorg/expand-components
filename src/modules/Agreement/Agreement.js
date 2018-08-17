import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

import Alignment from '../Alignment';
import Modal from '../Modal';
import Paragraph from '../Paragraph';

export default class Agreement extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    button: PropTypes.string,
    label: PropTypes.string.isRequired,
    headline: PropTypes.string,
    content: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    value: false,
    button: null,
    headline: null,
    content: null,
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
      content,
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
            <Paragraph content={content} />
          </Modal>
        )}
      </Alignment>
    );
  }
}
