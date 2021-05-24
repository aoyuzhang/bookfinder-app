import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './screens/home';
import Book from './screens/book';

export default(
  <Switch>
    <Route exact path="/" componenet = {Home} />
    <Route path="/book/:ID" componenet = {Book}/>
  </Switch>
);
