import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Window from '../components/workspace/Window';
import Icon from '../components/workspace/Icon';
import { profile, experience, additionalExperience, projects, skills, education, certification } from '../data/profile';
import './resume.css';

export default function ResumePage() {
  return <Layout pageHead="Curriculum vitae" pageClass="resume-page"><div className="cv-actions"><button type="button" className="cv-print" onClick={() => window.print()}><Icon name="print" /> Print / save PDF →</button><Link className="text-link" to="/projects">View work and projects →</Link></div><Window title="curriculum-vitae.txt" className="cv-window"><article className="cv-content">
    <header className="cv-header"><div><h2>{profile.name}</h2><p className="cv-title">{profile.role} · {profile.location}</p></div><div className="cv-contact"><a href={`mailto:${profile.email}`}>{profile.email}</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/sheyiadekoya</a><a href={profile.github} target="_blank" rel="noopener noreferrer">github.com/sheyooo</a></div></header><p className="cv-summary">{profile.summary}</p>
    <section><h2>Professional experience</h2>{[...experience, ...additionalExperience].map(job => <article className="cv-job" key={job.company}><div className="cv-job-heading"><h3>{job.company}</h3><p className="cv-dates">{job.dates}</p></div><p className="cv-role">{job.role}</p><p className="cv-meta">{job.location}</p><p>{job.description}</p></article>)}</section>
    <section><h2>Selected projects</h2>{projects.map(project => <article className="cv-job" key={project.id}><div className="cv-job-heading"><h3>{project.name}</h3><p className="cv-dates">{project.dates}</p></div><p className="cv-role">{project.role}</p><p>{project.description}</p><p>{project.contribution}</p><p className="cv-meta">{project.tags.join(' / ')}</p></article>)}</section>
    <section><h2>Technical skills</h2>{skills.map(group => <p className="cv-skill" key={group.title}><b>{group.title}:</b> {group.items.join(', ')}</p>)}</section>
    <div className="cv-education"><section><h2>Education</h2><h3>{education.school}</h3><p>{education.dates}</p></section><section><h2>Recognition</h2><h3>{certification.name}</h3><p>{certification.issuer} · {certification.date}</p></section></div>
  </article></Window></Layout>;
}
