import React from 'react';

import { Link } from 'react-router-dom';

import PageDark from './PageDark';

const NotFound = () => (
  <PageDark>
    <Link to="/">Back</Link>
  </PageDark>
);

export default NotFound;
