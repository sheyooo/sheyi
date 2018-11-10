import React from 'react';

import { Link } from 'react-router-dom';
import logo from './../assets/sheyi-logo.svg';

import './layout.scss';

const Layout = (props) => (
  <div className="flex flex-col" style={{minHeight: '100vh'}}>
    <div className="sh-header flex-initial p-5 lg:p-10">
      <nav>
        <Link to="/">
          <img style={{ height: 50, marginRight: 20 }} src={logo} alt="{.sh}" />
        </Link>
        <Link className="sh-header__nav" to="/">
          Home
        </Link>
        <Link className="sh-header__nav" to="/works">
          Projects
        </Link>
      </nav>
    </div>
    <div className="sh-container flex-grow p-5 lg:p-10">
      <div className="flex">
        <div className="w-full mx-auto">
          {props.children}
        </div>
      </div>
    </div>

    <div className="sh-footer flex-initial flex p-5 lg:p-10">
      <div>
        Find me online at
        <div className="mt-1">
          <a className="mr-1" href="https://github.com/sheyooo">Github</a>
          <a className="mx-1" href="https://twitter.com/sheyooo">Twitter</a>
          <a className="mx-1" href="https://twitter.com/sheyooo">Instagram</a>
        </div>
      </div>


      <div className="w-1/3 ml-auto">
        Copyright
        <div>
          <span style={{verticalAlign: 'middle', fontSize: 40}}>&copy;</span> Seyi Adekoya, 2018
        </div>
      </div>
    </div>


  </div>

);

export default Layout;