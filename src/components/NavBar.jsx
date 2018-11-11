import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

import logo from './../assets/sheyi-logo.svg';

export default () => (
  <div className="sh-header flex-initial p-5 lg:p-10">
    <nav>
      <NavLink to="/">
        <img style={{ height: 50, marginRight: 20 }} src={logo} alt="{.sh}" />
      </NavLink>
      <NavLink exact className="hidden sm:inline-block sh-header__nav" to="/">
        Home
      </NavLink>
      <NavLink exact className="hidden sm:inline-block sh-header__nav" to="/about">
        About
      </NavLink>
      <NavLink className="hidden sm:inline-block sh-header__nav" to="/projects">
        Projects
      </NavLink>
      {/* <NavLink className="sh-header__nav" to="/resume">
        RESUMÉ
      </NavLink> */}

      {/* <NavLink className="sh-header__nav" to="/next">
        ->
      </NavLink> */}

    </nav>
  </div>
);
