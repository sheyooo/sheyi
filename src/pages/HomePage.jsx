import React from 'react';
// eslint-disable-next-line
// import Typed from 'typed.js';
import { Link } from 'react-router-dom';

import Layout from './../layouts/Layout';

import picture from './../assets/professional-picture.jpg';

export default class HomePage extends React.Component {

  // typed = null;

  componentDidMount() {
    // this.typed = new Typed('#typed', {
    //   strings: [
    //     'full-stack development.',
    //     'front-end development.',
    //     'back-end development.'
    //   ],
    //   loop: true,
    //   smartBackspace: true,
    //   backSpeed: 50,
    //   backDelay: 2000,
    //   typeSpeed: 50,
    //   showCursor: true
    // });
  }

  componentWillUnmount() {
    // this.typed.destroy();
  }

  render() {
    const styles = {
      heroText: {
        fontSize: 35,
        lineHeight: '90px'
      }
    };
    return (
      <Layout>
        <div className="w-full md:w-3/5">
          {/* <div className="mb-5" style={styles.heroText}>
            <p className="inline-block" id="typed" style={styles.heroText}></p>
            &nbsp;
          </div> */}

          <p className="mb-5" style={styles.heroText}>
            <a href="mailto:sheyiadekoya@gmail.com" className="name-in-bio inline-flex">
              <span>I</span><span role="img" aria-label="Email">@</span>
            </a> am Seyi, a <span className="px-2 pb-1" style={{background: '#171', color: 'white'}}>Nigerian</span> based Techie.
            I currently work with <a target="_blank" rel="noreferrer noopener" href="https://getmindright.org">MindRight</a> and&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://andela.com">Andela</a>. I founded a startup
            called <span className="text-purple">GradeAccess</span> and
            co-founded <span className="text-purple">Testify</span>. <Link to="/projects">See My Projects ➝</Link>
          </p>
      {/* <h2 className="mb-10 inline-block" style={{fontWeight: 'lighter'}}> Next ➝</h2> */}
          
        </div>
        <div className="hidden md:flex flex-grow justify-end items-start">
          <div className="w-1/3 flex-no-grow">

            <img src={picture} alt="Seyi Adekoya"/>
          </div>
          <div className="flex flex-col items-end ml-10">
            <span style={{fontSize: 21}}>HOME</span>
            <span style={{fontSize: 50}}>➝</span>
            <span style={{fontSize: 21}}>PROJECTS</span>
            <span style={{fontSize: 50}}>➝</span>
            <span style={{fontSize: 21}}>RESUMÉ</span>
          </div>
        </div>

      </Layout>
    )
  }
}