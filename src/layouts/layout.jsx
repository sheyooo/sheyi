import React from 'react';

import NavBar from './../components/NavBar';
import Footer from './../components/Footer';

import logo from './../assets/sheyi-logo.svg';

import './layout.scss';

const Layout = (props) => (
  <div className="flex flex-col" style={{minHeight: '100vh'}}>
    <NavBar />

    <div className="sh-container flex-grow p-5 lg:p-10">
      <div className="flex w-full mx-auto relative">
        {props.children}
      </div>
    </div>

    <Footer />
  </div>

);

export default Layout;