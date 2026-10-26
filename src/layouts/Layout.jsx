import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/sheyi-logo.svg';
import { profile } from '../data/profile';
import Icon from '../components/workspace/Icon';

const navigation = [ ['/', 'HOME'], ['/about', 'ABOUT'], ['/projects', 'PROJECTS'], ['/resume', 'CV'] ];

export default function Layout({ children, pageHead, pageClass = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setMenuOpen(false), [location]);
  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = event => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);
  return <div className={`site ${pageClass}`}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header shell"><Link to="/" className="site-logo" aria-label="Seyi Adekoya home"><img src={logo} width="64" height="64" alt="{.sh}" /></Link><nav className={menuOpen ? 'top-navigation is-open' : 'top-navigation'} id="main-navigation" aria-label="Main navigation">{navigation.map(([path, label]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}</nav><div className="header-actions"><a className="email-icon" href={`mailto:${profile.email}`} aria-label="Email Seyi"><Icon name="mail" /></a><button type="button" className="mobile-menu" aria-controls="main-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button></div></header>
    <main id="main-content" className="site-main shell" tabIndex={-1}><nav className="page-index" aria-label="Page index">{navigation.map(([path, label]) => <React.Fragment key={path}><NavLink to={path} end={path === '/'}>{label}</NavLink><span aria-hidden="true">→</span></React.Fragment>)}</nav>{pageHead && <h1 className="page-heading">→ {pageHead}</h1>}{children}</main>
    <footer className="site-footer shell"><div><p className="footer-heading">Let’s connect →</p><span className="footer-location">Built with care in Berlin. © {new Date().getFullYear()} Seyi Adekoya</span></div><div className="footer-links"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" />GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />LinkedIn</a><a href={`mailto:${profile.email}`}><Icon name="mail" />Email</a></div></footer>
  </div>;
}
