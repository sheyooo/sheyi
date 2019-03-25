import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './../layouts/Layout';

// import picture from './../assets/professional-picture.jpg';

export default class HomePage extends React.Component {

  render() {
    return (
      <Layout>
        <div className="w-full md:w-3/5">
          <p className="wow fadeIn mb-5 hero-text">
            <a href="mailto:sheyiadekoya@gmail.com" className="name-in-bio inline-flex">
              <span>I</span><span role="img" aria-label="Email">@</span>
            </a> am <span className="px-2 pb-1" style={{background: 'rgba(17,119,17,0.8)', color: 'white'}}>Seyi</span>,
            I work at <a target="_blank" rel="noreferrer noopener" href="https://wunderflats.com">Wunderflats</a> in Berlin 🇩🇪.
            I've worked with <a target="_blank" rel="noreferrer noopener" href="https://getmindright.org">MindRight</a> and&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://andela.com">Andela</a>. I started <span className="text-purple">GradeAccess</span> and
            co-founded <span className="text-purple">Testify</span>. <Link to="/about">Learn more ➝</Link>
          </p>
        </div>
        {/* <div className="hidden md:flex flex-grow justify-end items-start">
          <div className="w-1/3 flex-no-grow">
            <img src={picture} alt="Seyi Adekoya"/>
          </div>
        </div> */}

      </Layout>
    )
  }
}