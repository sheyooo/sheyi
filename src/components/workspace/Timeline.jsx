import React from 'react';
import { Link } from 'react-router-dom';
import { experience, additionalExperience } from '../../data/profile';

export default function Timeline({ full = false }) {
  const jobs = full ? [...experience, ...additionalExperience] : experience.slice(0, 3);
  return <div className={`timeline ${full ? 'timeline-full' : ''}`}>
    <ol className="timeline-list">{jobs.map(job => <li key={job.company} className={job.current ? 'timeline-entry is-current' : 'timeline-entry'}>
      <span className="timeline-marker" aria-hidden="true" />
      <p className="timeline-dates">{job.dates}</p>
      <div className="timeline-job"><div className="timeline-company"><h3><Link to={`/projects?project=${job.id}#selected-work`} state={{ revealSelectedWork: true }}>{job.company}</Link></h3>{job.current && <span className="current-tag">Current</span>}</div><p className="timeline-role">{job.role}</p><p className="timeline-location">{job.location}</p>{full && <><p className="timeline-description">{job.description}</p>{job.tags && <p className="timeline-stack">{job.tags.join(' / ')}</p>}</>}</div>
    </li>)}</ol>
    {!full && <Link className="text-link timeline-more" to="/projects#experience">Full experience →</Link>}
  </div>;
}
