import React from 'react';

import { Link } from 'react-router-dom';

import Layout from './../layouts/Layout';

// import picture from './../assets/professional-picture.jpg';

const styles = {
  spanTerminal: {
    background: 'black',
    color: 'wheat'
  }
};

export default class AboutPage extends React.Component {
  render() {
    const whoAmI = (
      <div className="inline-flex cursor-pointer">
        <span className="name-in-bio inline-flex mr-10">
          <span style={styles.spanTerminal}><code>$ whoami</code></span>
          <span>Who Am I?</span>
        </span> 🕵️
      </div>
    );

    return (
      <Layout pageHead={whoAmI}>
        <div className="w-full md:w-3/5">
          <p  className="wow fadeIn mb-10 sub-hero-text">
            I am a fun, personable and persistent Software Engineer. Wrote my first piece of code about 7 years ago. I currently have over 4 years of professional hands-on experience using JavaScript and various frameworks and libraries to create magic and make people’s lives better.
            <Link to="/projects">Projects ➝</Link>
          </p>
          <p className="wow fadeIn mb-10 sub-hero-text">
            I am most proud of my achievements at MindRight, a service that serves schools and thousands of users in the USA, thanks to my contributions as the Lead Developer. 
          </p>
          <p className="wow fadeIn mb-10 sub-hero-text">
            In my spare time, I enjoy solving programming challenge on HackerRank, Codility, and CodeWars. I also possess excellent interpersonal communication skills with both technical and non-technical audiences.
            <Link to="/projects">What I've been up to ➝</Link>
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