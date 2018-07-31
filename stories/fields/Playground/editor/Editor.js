import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CodeEditor from './CodeEditor';

import ErrorMessage from '../../../../src/components/ErrorMessage';
import Tooltip from '../../../../src/components/Tooltip';

import FieldType from '../../../../src/fields/Field/fieldType';

import Menu from './Menu';

import styles from './Editor.module.styl';

export const fields = Reflect.ownKeys(FieldType);

const Add = Tooltip(({ children, ...rest }) => (
  <button {...rest}>{children}</button>
));

export default class Editor extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    error: PropTypes.any, //eslint-disable-line
    onAddField: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    error: null,
  };

  state = {
    menu: false,
  };

  handleToggleMenu = () => {
    this.setState(({ menu }) => ({ menu: !menu }));
  };

  render() {
    const { source, error, onChange, onAddField } = this.props;
    const { menu } = this.state;
    return (
      <div className={styles.container}>
        {error && <ErrorMessage error={{ commonMessage: error.toString() }} />}
        <div className={styles.content}>
          <CodeEditor
            className={styles.textarea}
            source={source}
            onChange={onChange}
          />
          <div className={styles.menu}>
            <Add
              tooltip="Add field"
              className={styles.add}
              onClick={this.handleToggleMenu}
            />
            {menu && (
              <Menu
                items={fields}
                onHide={this.handleToggleMenu}
                onSelect={onAddField}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
