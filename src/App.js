/**
 * @module  : Photoshoot Main Components
 * @author  : GopalaKrishnan.R <rgkrish183@gmail.com>
 * @s-date  : 2020-02-24 19:59
 */

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import CommonRoutes from './_routes/index';

import './styles.css';

const AppRoute = ({ Layout, Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {/* Redirecting to Exact SubRoots */}
            <Redirect to='/home' />
          </Route>
          {CommonRoutes.map((item, key) => {
            return (
              <AppRoute
                key={key}
                name={item.NAME}
                path={item.URL}
                Secure={item.SECURE}
                DisplayName={item.DISPLAYNAME}
                Layout={item.LAYOUT}
                Icon={item.DISPLAYICON}
                Component={item.COMPONENT}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
