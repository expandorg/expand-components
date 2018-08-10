import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CodeEditor from './CodeEditor';

import ErrorMessage from '../../../../src/components/ErrorMessage';
import Tooltip from '../../../../src/components/Tooltip';

import ModuleType from '../../../../src/modules/Module/ModuleType';

import Menu from './Menu';

import styles from './Editor.module.styl';

export const modules = Reflect.ownKeys(ModuleType);

const Add = Tooltip(({ children, ...rest }) => (
  <button {...rest}>{children}</button>
));

export default class Editor extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    editMode: PropTypes.oneOf(['full', 'edit', 'readOnly', 'hidden'])
      .isRequired,
    error: PropTypes.any, //eslint-disable-line
    onAddModule: PropTypes.func.isRequired,
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
    const { source, error, onChange, onAddModule, editMode } = this.props;
    const { menu } = this.state;
    return (
      <div className={styles.container}>
        {error && <ErrorMessage error={{ commonMessage: error.toString() }} />}
        <div className={styles.content}>
          <CodeEditor
            className={styles.textarea}
            source={source}
            readOnly={editMode === 'readOnly'}
            onChange={onChange}
          />
          {editMode === 'full' && (
            <div className={styles.menu}>
              <Add
                tooltip="Add module"
                className={styles.add}
                onClick={this.handleToggleMenu}
              />
              {menu && (
                <Menu
                  items={modules}
                  onHide={this.handleToggleMenu}
                  onSelect={onAddModule}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
