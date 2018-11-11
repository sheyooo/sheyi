import React from 'react';
import WOW from 'wow.js';

import Layout from './../layouts/Layout.jsx';

export default class ProjectsPage extends React.Component {

  componentDidMount() {
    // console.log(WOW);
    const wow = new WOW();
    wow.init();
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Layout>
        <div className="lg:w-1/2 sm:w-full">
          <h1 className="wow fadeInTop">
            Projects
          </h1>

          <div className="flex w-full">
            <div className="w-full">
              Hey
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}