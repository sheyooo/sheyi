import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/HomePage';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>

        <Switch>
          <Route path="**" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
