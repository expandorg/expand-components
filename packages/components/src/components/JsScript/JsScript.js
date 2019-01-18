import { Component } from 'react';
import PropTypes from 'prop-types';

import { withServices } from '../ServiceProvider';

class JsScript extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    async: PropTypes.bool,
    defer: PropTypes.bool,
    disable: PropTypes.bool,
    services: PropTypes.shape({
      resolve: PropTypes.func,
    }).isRequired,
  };

  static defaultProps = {
    async: true,
    defer: false,
    disable: false,
  };

  constructor(props) {
    super(props);
    const jsScripts = props.services.resolve('jsScripts');
    this.state = {
      jsLoaded: jsScripts.isLoaded(props.src),
    };
  }

  componentDidMount() {
    const { src, async, defer, disable, services } = this.props;
    if (!disable) {
      const jsScripts = services.resolve('jsScripts');
      this.unsubsribe = jsScripts.addScript(src, async, defer, this.handleLoad);
    }
  }

  componentWillUnmount() {
    const { disable } = this.props;
    if (!disable && this.unsubsribe) {
      this.unsubsribe();
    }
  }

  handleLoad = () => {
    this.setState({ jsLoaded: true });
  };

  render() {
    const { children } = this.props;
    if (!children) {
      return null;
    }
    const { jsLoaded } = this.state;
    return children({ jsLoaded });
  }
}

export default withServices(JsScript);
