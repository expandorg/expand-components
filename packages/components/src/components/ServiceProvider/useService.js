import { useContext } from 'react';

import ServicesContext from './ServicesContext';

export default function useService() {
  return useContext(ServicesContext);
}
