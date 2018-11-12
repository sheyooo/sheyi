import React, { Component } from 'react';
// import {Scro} from 'react-router';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import WOW from 'wow.js';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

import './App.css';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

ScrollToTop = withRouter(ScrollToTop);

class App extends Component {

  componentDidMount() {
    new WOW().init();
  }

  render() {
    return (
      <Router>

        <div>
          <ScrollToTop />
          <Helmet>
            <title>Seyi Adekoya - Full Stack Engineer</title>
          </Helmet>

          <Switch >
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/resume" component={ResumePage} />
            <Route component={HomePage} />
          </Switch>
        </div>
        {/* </ScrollToTop> */}

      </Router>
    );
  }
}

export default App;
