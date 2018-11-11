import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Helmet>
            <title>Seyi Adekoya - Full Stack Engineer</title>
          </Helmet>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/resume" component={ResumePage} />
            <Route component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
