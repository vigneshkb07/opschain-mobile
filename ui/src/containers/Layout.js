import React from 'react';
import { Switch, Route } from 'react-router';
import Listing from '../components/Listing';
/**
 * App.js will render this main layout/router, which will set the layout for
 * the respective folder. Landing page layout & user/admin layouts will be slightly
 * different.
 */
const Layout = () => (
  <Switch>
    <Route path="/" exact component={Listing} />
  </Switch>
);

export default Layout;
