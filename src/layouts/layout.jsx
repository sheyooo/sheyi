import React from 'react';

import NavBar from './../components/NavBar';
import Footer from './../components/Footer';

import './layout.scss';

const Layout = (props) => (
  <div className="flex flex-col" style={{minHeight: '100vh'}}>
    <NavBar />

    <div className="sh-container flex-grow p-5 pt-0 lg:p-10 lg:pt-0">
      <h2 className="mb-10 mr-10 inline-block" style={{fontWeight: 'lighter'}}>➝ {props.pageName || 'Hi there 👋🏾'}</h2>
      <div className="flex w-full mx-auto relative">
        {props.children}
      </div>
    </div>

    <Footer />
  </div>

);

export default Layout;