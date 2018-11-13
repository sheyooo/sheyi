import React from 'react';

import { Link } from 'react-router-dom';

import Layout from './../layouts/Layout';
import Emoji from '../components/Emoji';

// import picture from './../assets/professional-picture.jpg';

const styles = {
  spanTerminal: {
    background: '#333',
    color: 'wheat'
  }
};

export default class AboutPage extends React.Component {
  render() {
    const whoAmI = (
      <div className="inline-flex cursor-pointer">
        <span className="name-in-bio inline-flex mr-5">
          <span style={styles.spanTerminal}>
            <code>$ whoami</code>
            <code style={{verticalAlign: 'middle'}} className="blinkingCursor">█</code>
            &nbsp;
          </span>
          <span>Who Am I?</span>
        </span> 🕵️
      </div>
    );

    return (
      <Layout pageHead={whoAmI}>
        <div className="w-full md:w-3/5">
          <p  className="wow fadeIn mb-10 sub-hero-text">
            I'm a fun HomoSapien<Emoji symbol="❤️" />. Wrote my first piece of code about 7 years ago. I have been coding with JavaScript for close to 4 years.
          </p>
          <p className="wow fadeIn mb-10 sub-hero-text">
            I'm most proud of my achievements with MindRight, a product that serves schools and thousands of teens in the USA, thanks to my contributions as the Lead Developer. 
          </p>
          <p className="wow fadeIn mb-10 sub-hero-text">
            Some of my interests lie in Blockchain <Emoji symbol="⛓️" />, ML <Emoji symbol="🤖" />, and AI <Emoji symbol="🧠" />.
            In my spare time, I enjoy solving code challenges on HackerRank, Codility, and CodeWars.
          </p>
          <p className="wow fadeIn mb-10 sub-hero-text">
            When I'm not coding, you'll find me spending time with loved ones, playing video games <Emoji symbol="🎮" /> (FIFA) or doing some other creative things like music <Emoji symbol="🎹" /> and photography  <Emoji symbol="📸" />.&nbsp;
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