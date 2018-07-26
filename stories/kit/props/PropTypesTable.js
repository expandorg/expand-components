import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './PropTypesTable.module.styl';

const typesMap = new Map();

Reflect.ownKeys(PropTypes).forEach(typeName => {
  typesMap.set(PropTypes[typeName], typeName);
  typesMap.set(PropTypes[typeName].isRequired, typeName);
});

const getDefault = (name, defaultProps) => {
  if (!defaultProps || defaultProps[name] === undefined) {
    return undefined;
  }
  return JSON.stringify(defaultProps[name]);
};

const getPropDescriptions = ({ propTypes, defaultProps }) =>
  Reflect.ownKeys(propTypes).map(name => {
    const propType = propTypes[name];
    const required = propType.isRequired === undefined;
    return {
      name,
      propType,
      required,
      default: getDefault(name, defaultProps),
    };
  });

export default class PropTypesTable extends Component {
  static propTypes = {
    type: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
  };

  render() {
    const { type } = this.props;
    if (!type.propTypes) {
      return null;
    }
    const descriptions = getPropDescriptions(type);
    return (
      <div className={styles.container}>
        <div className={styles.header}>{type.name} PropTypes:</div>
        <table>
          <thead>
            <tr>
              <td>property</td>
              <td>type</td>
              <td>required</td>
              <td>default</td>
            </tr>
          </thead>
          <tbody>
            {descriptions.map(description => (
              <tr key={description.name}>
                <td>{description.name}</td>
                <td>{description.propType.name}</td>
                <td>{description.required ? '+' : '-'}</td>
                <td>{description.default}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
