import React, { Fragment } from 'react';
import { Router, Link } from 'react-static';
import styled, { ThemeProvider } from 'styled-components';
import StyleReset from './components/StyleReset';
import { hot } from 'react-hot-loader'
import DevTools from 'mobx-react-devtools';

import Routes from 'react-static-routes';

import Navbar from './components/Navbar';
import { globalTheme } from './styles/themes';

const App = () => (
  <Router>    
    <ThemeProvider theme={globalTheme}>
      <Fragment>
        <DevTools />
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display|Raleway:400,700" rel="stylesheet" />
        <Navbar />
        <Routes />
      </Fragment>
    </ThemeProvider>
  </Router>
);

export default hot(module)(App)

