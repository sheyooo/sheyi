import React, { useEffect, useId, useRef, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { projects, selectedWork } from '../../data/profile';
import Window from './Window';
import { ProjectIllustration } from './Illustrations';

export default function ProjectWindow({ detailed = false }) {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [homeSelection, setHomeSelection] = useState('mindright');
  const items = detailed ? selectedWork : projects;
  const selected = detailed ? (params.get('project') || 'mindright') : homeSelection;
  const project = items.find(item => item.id === selected) || items.find(item => item.id === 'mindright');
  const prefix = useId();
  const tabRefs = useRef([]);
  useEffect(() => {
    if (detailed) {
      tabRefs.current[items.indexOf(project)]?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }, [detailed, items, project]);
  const revealKey = location.state?.revealSelectedWork ? location.key : undefined;
  const select = id => detailed
    ? navigate({ pathname: location.pathname, search: `?project=${id}`, hash: location.hash }, { preventScrollReset: true })
    : setHomeSelection(id);
  function navigateTabs(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % items.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + items.length) % items.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = items.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      select(items[next].id);
      tabRefs.current[next]?.focus();
    }
  }
  return <Window title="selected-work/" id="selected-work" className="project-window" revealKey={revealKey}>
    <div className="project-tabs" role="tablist" aria-label="Selected projects">{items.map((item, index) => <button type="button" key={item.id} role="tab" id={`${prefix}-${item.id}-tab`} aria-controls={`${prefix}-panel`} aria-selected={item.id === project.id} tabIndex={item.id === project.id ? 0 : -1} ref={element => { tabRefs.current[index] = element; }} onClick={() => select(item.id)} onKeyDown={event => navigateTabs(event, index)}>{item.id === 'mindright' ? 'MindRight' : item.name}</button>)}</div>
    <div role="tabpanel" id={`${prefix}-panel`} aria-labelledby={`${prefix}-${project.id}-tab`} tabIndex={0}>
      <div className="project-panel"><div className="project-panel-copy"><p className="project-category">{project.label.toLowerCase()}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><p className="project-role">{project.role}<span>{project.dates}</span></p>{project.location && <p className="project-location">{project.location}</p>}{detailed ? <div className={`project-contribution ${project.contribution ? '' : 'role-details'}`}>{project.contribution && <><h4>My contribution</h4><p>{project.contribution}</p></>}{project.url && <a className="text-link" href={project.url} target="_blank" rel="noopener noreferrer">Visit {project.name} ↗</a>}</div> : <Link className="text-link" to={`/projects?project=${project.id}#selected-work`}>Explore project →</Link>}</div><ProjectIllustration type={project.icon} /></div>
      <p className="project-stack">{project.tags.join(' / ')}</p>
    </div>
  </Window>;
}
