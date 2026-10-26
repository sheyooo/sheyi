import React from 'react';
import Layout from '../layouts/Layout';
import Window from '../components/workspace/Window';
import Timeline from '../components/workspace/Timeline';
import ProjectWindow from '../components/workspace/ProjectWindow';

export default function ProjectsPage() {
  return <Layout pageHead="Work & projects" pageClass="projects-page"><p className="page-intro">Different challenges. The same curiosity.<br />A few places I’ve worked, and things I’ve helped build.</p><ProjectWindow detailed /><Window title="experience.log" id="experience" className="full-experience-window"><div className="window-intro"><h2>People. Products. Places.</h2><p>The full journey — including development, leadership, and mentoring.</p></div><Timeline full /></Window></Layout>;
}
