import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Dialog, Button, DialogHeadline } from '@gemsorg/components';

import { formProps } from '../../../Form';
import CodeEditor from '../../Playground/editor/CodeEditor';

import styles from './SourceDialog.module.styl';

export default class SourceDialog extends Component {
  static propTypes = {
    form: formProps.isRequired,
    visible: PropTypes.bool,
    onHide: PropTypes.func.isRequired,
  };

  static defaultProps = {
    visible: false,
  };

  render() {
    const { form, onHide, visible } = this.props;
    const source = JSON.stringify(form, undefined, 2);
    return (
      <Dialog visible={visible} onHide={onHide} contentLabel="sources">
        <DialogHeadline>Form source</DialogHeadline>
        <div className={styles.container}>
          <CodeEditor className={styles.textarea} source={source} readOnly />
        </div>
        <div className={styles.actions}>
          <Button size="small" onClick={onHide}>
            Close
          </Button>
        </div>
      </Dialog>
    );
  }
}
