/**
 * @module  : Photoshoot Main Communicator index
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Importing Libs
import { ThemeProvider } from '@material-ui/core/styles';
import AppTheme from './theme';

// Importing Components
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={AppTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
