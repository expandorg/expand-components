import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../src/components/Button';
import { Dialog, DialogHeadline } from '../../../src/components/Dialog';

import { formProps } from '../../../src/modules/Form';
import CodeEditor from '../../modules/Playground/editor/CodeEditor';

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
