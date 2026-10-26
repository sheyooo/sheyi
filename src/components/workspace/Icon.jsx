import React from 'react';

export default function Icon({ name, className = '', ...props }) {
  const paths = {
    mail: <><path d="M3 6h18v13H3z" /><path d="m3 6 9 7 9-7" /></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    maximize: <rect x="5" y="5" width="14" height="14" />,
    restore: <><path d="M8 4h12v12" /><rect x="4" y="8" width="12" height="12" /></>,
    minus: <path d="M5 12h14" />,
    plus: <path d="M5 12h14M12 5v14" />,
    external: <><path d="M6 18 18 6M7 6h11v11" /></>,
    music: <><path d="M9 17V5l12-2v12M9 8l12-2" /><ellipse cx="6" cy="18" rx="3" ry="2" /><ellipse cx="18" cy="16" rx="3" ry="2" /></>,
    camera: <><path d="M8 6 10 3h4l2 3h5v14H3V6Z" /><circle cx="12" cy="12" r="4" /></>,
    code: <><path d="m7 6-5 6 5 6M17 6l5 6-5 6M14 3 10 21" /></>,
    monitor: <><rect x="2" y="3" width="20" height="14" rx="1" /><path d="M8 22h8M12 17v5" /></>,
    server: <><rect x="3" y="3" width="18" height="7" rx="1" /><rect x="3" y="14" width="18" height="7" rx="1" /><path d="M6 6.5h.1M6 17.5h.1M11 6.5h7M11 17.5h7" /></>,
    cloud: <path d="M6 18h12a4 4 0 0 0 .2-8A6.5 6.5 0 0 0 6 8a5 5 0 0 0 0 10Z" />,
    check: <><path d="m7 12 3 3 7-7" /><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6Z" /></>,
    github: <><path d="M9 21v-4c-4 1-4-2-6-2M15 21v-4c0-1-.5-2-.5-2 4-.5 5.5-2 5.5-5 0-2-1-3-1-3 .5-2 0-4 0-4-2 0-4 2-4 2a13 13 0 0 0-6 0S7 3 5 3c0 0-.5 2 0 4 0 0-1 1-1 3 0 3 1.5 4.5 5.5 5 0 0-.5 1-.5 2" /></>,
    linkedin: <><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M7 10v7M7 7v.1M11 17v-7M11 13c0-4 6-4 6 0v4" /></>,
    print: <><path d="M6 8V2h12v6M6 18H2V8h20v10h-4M6 14h12v8H6Z" /></>,
  };
  return <svg className={`ui-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.code}</svg>;
}
