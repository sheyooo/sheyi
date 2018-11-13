import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import {OverlayContext} from './components/OverlayContext';

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

  constructor(props) {
    super(props);

    this.state = {
      isOverlayActive: false,
      setOverlayStateFn: this.handleOverlayChange
    };
  }

  componentDidMount() {
    new WOW().init();
  }

  handleOverlayChange = (v) => {
    this.setState({
      isOverlayActive: v
    });
  }

  render() {
    return (
      <Router>

        <OverlayContext.Provider value={this.state}>
          <ScrollToTop />
          <Helmet>
            <title>Seyi Adekoya - Full Stack Engineer</title>
          </Helmet>
          <OverlayContext.Consumer>
            {({isOverlayActive, onOverlayClick}) => {
              let overlayClass = 'overlay';
              overlayClass += isOverlayActive ? ' is-active' : '';

              return <div className={overlayClass}></div>
            }}
          </OverlayContext.Consumer>
          <Switch >
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/resume" component={ResumePage} />
            <Route component={HomePage} />
          </Switch>
        </OverlayContext.Provider>
      </Router>
    );
  }
}

export default App;
