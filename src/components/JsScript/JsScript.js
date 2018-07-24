// @flow
import { Component } from 'react';
import PropTypes from 'prop-types';

import { jsScripts } from '../../common/jsscripts';

type Props = {
  src: string,
  async?: boolean,
  defer?: boolean,
  disable?: boolean,
  children: Function,
};

type State = {
  jsLoaded: boolean,
};

export default class JsScript extends Component<Props, State> {
  static propTypes = {
    src: PropTypes.string.isRequired,
    async: PropTypes.bool,
    defer: PropTypes.bool,
    disable: PropTypes.bool,
  };

  static defaultProps = {
    async: true,
    defer: false,
    disable: false,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      jsLoaded: jsScripts.isLoaded(props.src),
    };
  }

  componentDidMount() {
    const { src, async, defer, disable } = this.props;
    if (!disable) {
      this.unsubsribe = jsScripts.addScript(src, async, defer, this.handleLoad);
    }
  }

  componentWillUnmount() {
    const { disable } = this.props;
    if (!disable) {
      this.unsubsribe();
    }
  }

  handleLoad = () => {
    this.setState({ jsLoaded: true });
  };

  unsubsribe: Function;

  render() {
    const { children } = this.props;
    const { jsLoaded } = this.state;
    return children({ jsLoaded });
  }
}
