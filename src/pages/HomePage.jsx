import React from 'react';
import Typed from 'typed.js';

import Layout from './../layouts/Layout';

export default class HomePage extends React.Component {

  typed = null;

  componentDidMount() {
    this.typed = new Typed('#typed', {
      strings: [
        'Full Stack Developer',
        'Front End Developer',
        'Back End Developer'
      ],
      loop: true,
      smartBackspace: true,
      backSpeed: 50,
      backDelay: 2000,
      typeSpeed: 50,
      showCursor: true
    });
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    const styles = {
      heroText: {
        fontSize: 35,
        lineHeight: '50px'
      }
    };
    return (
      <Layout>
        <div className="lg:w-1/2 sm:w-full">
          <div className="mb-5" style={styles.heroText}>
            <p className="inline-block" id="typed" style={styles.heroText}></p>
            &nbsp;
          </div>

          <p className="mb-5" style={styles.heroText}>
            <a href="mailto:sheyiadekoya@gmail.com" className="name-in-bio inline-flex">
              <span>Seyi Adekoya</span><span role="img" aria-label="Email">Mail him</span>
            </a> is a <span className="px-2 py-2" style={{background: '#171', color: 'white'}}>Nigerian</span> based Techie.

            He currently works with <a target="_blank" rel="noreferrer noopener" href="https://getmindright.org">MindRight</a> and&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://andela.com">Andela</a>. He founded a startup called <span className="text-purple">GradeAccess</span> and
            co-founded <span className="text-purple">Testify</span>
          </p>
        </div>
        <div className="flex flex-col flex-grow items-end">
          <span style={{fontSize: 21}}>PROJECTS</span>
          <span style={{fontSize: 50}}>➝</span>
          <span style={{fontSize: 21}}>PORTFOLIO</span>
        </div>
      </Layout>
    )
  }
}