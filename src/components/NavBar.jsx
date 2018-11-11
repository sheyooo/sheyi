import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.scss';

import logo from './../assets/sheyi-logo.svg';

export default () => (
  <div className="sh-header flex justify-between flex-initial p-5 lg:p-10">
    <nav className="">
      <NavLink to="/">
        <img style={{ height: 50, marginRight: 20 }} src={logo} alt="{.sh}" />
      </NavLink>
      <NavLink exact className="hidden md:inline-block sh-header__nav" to="/">
        HOME
      </NavLink>
      <NavLink exact className="hidden sm:inline-block sh-header__nav" to="/about">
        ABOUT
      </NavLink>
      <NavLink className="hidden sm:inline-block sh-header__nav" to="/projects">
        PROJECTS
      </NavLink>
      {/* <NavLink className="sh-header__nav" to="/resume">
        RESUMÉ
      </NavLink> */}

      {/* <NavLink className="sh-header__nav" to="/next">
        ->
      </NavLink> */}

    </nav>
    <a href="mailto:sheyiadekoya@gmail.com">
      <img style={{width: 40}} alt="Gmail" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiBjbGFzcz0iIj48Zz48cmVjdCB4PSI2NCIgeT0iNjQiIHN0eWxlPSJmaWxsOiNFQ0VGRjE7IiB3aWR0aD0iMzg0IiBoZWlnaHQ9IjM4NCIgZGF0YS1vcmlnaW5hbD0iI0VDRUZGMSIgY2xhc3M9IiI+PC9yZWN0Pjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNDRkQ4REM7IiBwb2ludHM9IjI1NiwyOTYuMzg0IDQ0OCw0NDggNDQ4LDE0OC42NzIgIiBkYXRhLW9yaWdpbmFsPSIjQ0ZEOERDIiBjbGFzcz0iIj48L3BvbHlnb24+PHBhdGggc3R5bGU9ImZpbGw6I0Y0NDMzNiIgZD0iTTQ2NCw2NGgtMTZMMjU2LDIxNS42MTZMNjQsNjRINDhDMjEuNTA0LDY0LDAsODUuNTA0LDAsMTEydjI4OGMwLDI2LjQ5NiwyMS41MDQsNDgsNDgsNDhoMTZWMTQ4LjY3MiAgbDE5MiwxNDcuNjhMNDQ4LDE0OC42NFY0NDhoMTZjMjYuNDk2LDAsNDgtMjEuNTA0LDQ4LTQ4VjExMkM1MTIsODUuNTA0LDQ5MC40OTYsNjQsNDY0LDY0eiIgZGF0YS1vcmlnaW5hbD0iI0Y0NDMzNiIgY2xhc3M9ImFjdGl2ZS1wYXRoIj48L3BhdGg+PC9nPiA8L3N2Zz4=" />
    </a>
  </div>
);
