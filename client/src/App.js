import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserPage from './containers/UserPage';
import AdminPage from './containers/AdminPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" component={AdminPage} />
          <Route path="/" component={UserPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;