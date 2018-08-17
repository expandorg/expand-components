import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Alignment from '../Alignment';
import Modal from '../Modal';
import Button from '../../components/Button';

import Paragraph from '../Paragraph';

import styles from './Instructions.module.styl';

export default class Instructions extends Component {
  static propTypes = {
    dialogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  static defaultProps = {};

  state = {
    visible: {},
  };

  handleToggle = dialog => {
    this.setState(({ visible }) => ({
      visible: { ...visible, [dialog]: !visible[dialog] },
    }));
  };

  render() {
    const { dialogs } = this.props;
    const { visible } = this.state;
    return (
      <Alignment padding="medium">
        <div className={styles.actions}>
          {dialogs.map(dialog => (
            <Fragment key={dialog.action}>
              <Button
                size="small"
                theme="link"
                className={styles.button}
                onClick={() => this.handleToggle(dialog.action)}
              >
                {dialog.action}
              </Button>
              <div className={styles.spacer} />
            </Fragment>
          ))}
        </div>
        {dialogs.map(dialog => (
          <Modal
            key={dialog.action}
            visible={visible[dialog.action]}
            onHide={() => this.handleToggle(dialog.action)}
            headline={dialog.title}
            button="Close"
          >
            <div>
              <Paragraph content={dialog.content} />
            </div>
          </Modal>
        ))}
      </Alignment>
    );
  }
}
