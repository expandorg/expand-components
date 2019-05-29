import PropTypes from 'prop-types';

import useScript from './useScript';

export default function JsScript({ src, async, defer, disable, children }) {
  const jsLoaded = useScript(src, disable, async, defer);
  return children({ jsLoaded });
}

JsScript.propTypes = {
  src: PropTypes.string.isRequired,
  async: PropTypes.bool,
  defer: PropTypes.bool,
  disable: PropTypes.bool,
  services: PropTypes.shape({
    resolve: PropTypes.func,
  }).isRequired,
};

JsScript.defaultProps = {
  async: true,
  defer: false,
  disable: false,
};
