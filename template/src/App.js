import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyles from './assets/styles/global';
import Routes from './routes';
import history from './routes/history';

export default function App() {
  return (
    <Router history={history}>
      <GlobalStyles />

      <Routes />
    </Router>
  );
}
