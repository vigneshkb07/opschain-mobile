import React from 'react';
import { Switch, Route } from 'react-router';
import Listing from '../components/Listing';
import Login from '../components/Login';
import SignIn from '../components/SignIn';
import Dashboard from '../containers/Dashboard';
/**
 * App.js will render this main layout/router, which will set the layout for
 * the respective folder.
 */
const Layout = () => (
 <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signin" exact component={SignIn}/>
    <Route path="/dashboard" exact component={Dashboard}/>
  </Switch>
);

export default Layout;
