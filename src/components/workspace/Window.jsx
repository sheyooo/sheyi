import React, { useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import Icon from './Icon';

export default function Window({ title, children, className = '', id, defaultCollapsed = false, revealKey }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [maximized, setMaximized] = useState(false);
  const location = useLocation();
  const contentId = useId();
  const headingId = useId();
  const windowRef = useRef(null);

  useEffect(() => {
    if (revealKey) setCollapsed(false);
  }, [revealKey]);
  useEffect(() => {
    if (location.state?.revealSelectedWork) setMaximized(false);
  }, [location.key, location.state?.revealSelectedWork]);

  useEffect(() => {
    if (!maximized) return undefined;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    windowRef.current.focus();
    function handleKey(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setMaximized(false);
      }
      if (event.key === 'Tab') {
        const items = [...windowRef.current.querySelectorAll('a[href], button, summary, [tabindex="0"]')]
          .filter(item => !item.disabled && !item.closest('[hidden]'));
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && (document.activeElement === first || document.activeElement === windowRef.current)) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKey);
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [maximized]);

  return <>
    {maximized && createPortal(<div className="window-backdrop" onClick={() => setMaximized(false)} aria-hidden="true" />, document.body)}
    <section id={id} ref={windowRef} tabIndex={maximized ? -1 : undefined} role={maximized ? 'dialog' : undefined} aria-modal={maximized || undefined} aria-labelledby={headingId} className={`terminal-window ${className} ${maximized ? 'is-maximized' : ''} ${collapsed ? 'is-collapsed' : ''}`}>
      <div className="window-titlebar">
        <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        <h2 id={headingId} className="window-filename">{title}</h2>
        <div className="window-controls">
          {!maximized && <button type="button" aria-label={`${collapsed ? 'Expand' : 'Collapse'} ${title}`} aria-expanded={!collapsed} aria-controls={contentId} onClick={() => setCollapsed(!collapsed)}><Icon name={collapsed ? 'plus' : 'minus'} /></button>}
          <button type="button" className="maximize-control" aria-label={`${maximized ? 'Restore' : 'Maximize'} ${title}`} aria-pressed={maximized} onClick={() => { setCollapsed(false); setMaximized(!maximized); }}><Icon name={maximized ? 'restore' : 'maximize'} /></button>
          {maximized && <button type="button" aria-label={`Close expanded ${title}`} onClick={() => setMaximized(false)}><Icon name="close" /></button>}
        </div>
      </div>
      <div id={contentId} className="window-content" hidden={collapsed}>{children}</div>
    </section>
  </>;
}
