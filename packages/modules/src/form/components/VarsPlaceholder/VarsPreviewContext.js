import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const VarsPreviewContext = createContext(null);

const VarsPreviewContextProvider = ({ isModulePreview, children }) => (
  <VarsPreviewContext.Provider value={isModulePreview}>
    {children}
  </VarsPreviewContext.Provider>
);

VarsPreviewContextProvider.propTypes = {
  isModulePreview: PropTypes.bool,
};

VarsPreviewContextProvider.defaultProps = {
  isModulePreview: false,
};

const useVarsPreviewContext = () => {
  return useContext(VarsPreviewContext);
};

export {
  VarsPreviewContext,
  VarsPreviewContextProvider,
  useVarsPreviewContext,
};
