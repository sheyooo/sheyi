import React from 'react';
import Typed from 'typed.js';

import Layout from './../layouts/layout';

export default class HomePage extends React.Component {

  typed = null;

  componentDidMount() {
    console.log('hhhh')
    this.typed = new Typed('#typed', {
      strings: [
        'A Full Stack Developer',
        'A Front End Developer',
        'A Back End Developer'
      ],
      loop: true,
      // startDelay: 1000,
      smartBackspace: true,
      backSpeed: 50,
      backDelay: 2000,
      typeSpeed: 50,
      showCursor: true,
      // cursorChar: '>'
    });
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <Layout>
        <div  className="w-1/2 sm:w-full">

        <div className="mb-5" style={{fontSize: 35}}>
          <p className="inline-block text-purple" id="typed" style={{fontSize: 35}}></p>
          &nbsp;
        </div>

        <p className="mb-5" style={{fontSize: 35}}>
          Hey there, <a href="mailto:sheyiadekoya@gmail.com" className="name-in-bio"><span>Seyi Adekoya</span><span role="img" aria-label="Email">Let's talk</span></a> here.
          I pull 🐇s out of 🎩s, because the fate of the world depends on it.
        </p>

        <p className="mb-5" style={{fontSize: 35}}>
          I currently work at <a target="_blank" rel="noreferrer noopener" href="https://getmindright.org">MindRight</a> and&nbsp;
          <a target="_blank" rel="noopener noreferrer" href="https://andela.com">Andela</a>, I founded a startup called <span className="text-purple">GradeAccess</span> and
          co-founded <span className="text-purple">Testify</span>
        </p>
        </div>


        <div></div>
      </Layout>
    )
  }
}