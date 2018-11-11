import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/resume" component={ResumePage} />
          <Route component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
