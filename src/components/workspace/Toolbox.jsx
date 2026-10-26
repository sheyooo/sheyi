import React from 'react';
import { skills } from '../../data/profile';
import Window from './Window';
import Icon from './Icon';

export default function Toolbox() {
  return <Window title="toolbox.json" id="toolbox" className="toolbox-window"><div className="toolbox-grid">{skills.map((group, index) => <details className="toolbox-group" key={group.title} open><summary><Icon name={['monitor', 'server', 'cloud', 'check'][index]} /><span>{group.title}</span><span className="toolbox-toggle" aria-hidden="true">−</span></summary><div><p className="toolbox-description">{group.description}</p><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div></details>)}</div></Window>;
}
