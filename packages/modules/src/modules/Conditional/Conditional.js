import { Component } from 'react';
import PropTypes from 'prop-types';

import PropControlTypes from '../../form/Form/PropControlTypes';
import ModuleCategories from '../../form/Form/ModuleCategories';

export default class Conditional extends Component {
  static propTypes = {
    condition: PropTypes.any, // eslint-disable-line
  };

  static defaultProps = {
    condition: false,
  };

  static module = {
    type: 'conditional',
    name: 'if (condition)',
    editor: {
      category: ModuleCategories.Display,
      properties: {
        condition: {
          type: PropControlTypes.string,
          placeholder: 'Condition value',
        },
        modules: {
          type: PropControlTypes.modules,
          caption: 'Drop content here',
        },
      },
      defaults: {
        modules: [],
      },
    },
  };

  render() {
    const { condition, children } = this.props;

    if (!condition || condition === '0' || condition === 'false') {
      return null;
    }

    return children;
  }
}
