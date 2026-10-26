import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import './App.css';

function PagePosition() {
  const { pathname, hash, key, state } = useLocation();
  useEffect(() => {
    if (!state?.revealSelectedWork) return undefined;
    const frame = requestAnimationFrame(() => document.getElementById('selected-work')?.scrollIntoView({ block: 'start' }));
    return () => cancelAnimationFrame(frame);
  }, [key, state?.revealSelectedWork]);
  useEffect(() => {
    document.title = pathname === '/resume' ? 'Seyi Adekoya — CV' : 'Seyi Adekoya — Software Engineer';
    if (hash) {
      const frame = requestAnimationFrame(() => document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: 'start' }));
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}><PagePosition /><Routes><Route path="/" element={<HomePage />} /><Route path="/about" element={<AboutPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/resume" element={<ResumePage />} /><Route path="*" element={<HomePage />} /></Routes></BrowserRouter>;
}
