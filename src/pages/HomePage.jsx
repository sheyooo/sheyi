import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Window from '../components/workspace/Window';
import Timeline from '../components/workspace/Timeline';
import ProjectWindow from '../components/workspace/ProjectWindow';
import Toolbox from '../components/workspace/Toolbox';
import Icon from '../components/workspace/Icon';
import { JourneyMap } from '../components/workspace/Illustrations';

export default function HomePage() {
  return <Layout pageClass="home-page">
    <section className="hero" aria-labelledby="hero-heading"><p className="greeting">→ Hi there <span role="img" aria-label="waving hand">👋🏾</span> <span role="img" aria-label="Nigeria">🇳🇬</span></p><h1 id="hero-heading">I am <span className="name-highlight">Seyi</span>.<br className="mobile-break" /> I build<br className="mobile-break" /> for people.<span className="terminal-cursor" aria-hidden="true">▏</span></h1><p className="hero-position">Software Engineer at <a href="https://www.redcare-pharmacy.com" target="_blank" rel="noopener noreferrer">Redcare Pharmacy</a> · Berlin <span role="img" aria-label="Germany">🇩🇪</span></p><p className="hero-previous">Previously at <a href="https://www.doctolib.com" target="_blank" rel="noopener noreferrer">Doctolib</a>, <a href="https://wunderflats.com" target="_blank" rel="noopener noreferrer">Wunderflats</a>, <a href="https://getmindright.org" target="_blank" rel="noopener noreferrer">MindRight Health</a>, and <a href="https://andela.com" target="_blank" rel="noopener noreferrer">Andela</a>.</p><div className="hero-links"><a className="text-link" href="#selected-work">Selected work ↓</a><Link className="text-link" to="/resume">View CV ↗</Link></div></section>
    <section className="workspace" aria-labelledby="workspace-heading"><h2 id="workspace-heading" className="section-heading">→ People. Products. Places.</h2><div className="workspace-grid"><Window title="experience.log" id="experience" className="experience-window"><Timeline /></Window><div className="workspace-aside"><Window title="$ whoami" className="whoami-window"><div className="whoami-copy"><h3>Engineer. Mentor. Builder.</h3><p>Based in Berlin. Roots in Nigeria.</p></div><JourneyMap /><div className="whoami-more"><Link className="text-link" to="/about">A little more about me →</Link></div></Window><Window title="beyond-code.txt" className="note-window"><div className="personal-note"><p>Music. Photography.<br className="note-break" /> A good game.</p><div aria-hidden="true"><Icon name="music" /><Icon name="camera" /></div></div></Window></div></div></section>
    <section className="home-projects" aria-label="Selected work"><h2 className="mobile-section-heading">→ Selected work</h2><ProjectWindow /></section><Toolbox />
  </Layout>;
}
