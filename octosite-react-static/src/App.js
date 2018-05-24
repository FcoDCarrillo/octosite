import React, { Fragment } from 'react';
import { Router } from 'react-static';
import { ThemeProvider } from 'styled-components';
import StyleReset from './components/StyleReset';
import { hot } from 'react-hot-loader'
import DevTools from 'mobx-react-devtools';

import Routes from 'react-static-routes';

import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
import SocialButtons from './components/SocialButtons';

import { globalTheme } from './styles/themes';

const App = () => (
  <Router>    
    <ThemeProvider theme={globalTheme}>
      <Fragment>
        <DevTools />
        { /* Google fonts */ }
        <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet" />
        { /* Font Awesome */ }
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
        <Navbar />
        <Routes component={AnimatedRoutes}/>
        <SocialButtons />
      </Fragment>
    </ThemeProvider>
  </Router>
);

export default hot(module)(App)

