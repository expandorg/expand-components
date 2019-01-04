import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage, Tooltip } from '@expandorg/components';

import CodeEditor from './CodeEditor';

import moduleControls, {
  getModuleControlsMap,
} from '../../../Form/moduleControls';

import Menu from './Menu';

import styles from './Editor.module.styl';

const modulesMap = getModuleControlsMap(moduleControls);

const moduleNames = Reflect.ownKeys(modulesMap);

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

  handleAddModule = type => {
    const { onAddModule } = this.props;
    onAddModule(modulesMap[type], type);
  };

  render() {
    const { source, error, onChange, editMode } = this.props;
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
                  items={moduleNames}
                  onHide={this.handleToggleMenu}
                  onSelect={this.handleAddModule}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
