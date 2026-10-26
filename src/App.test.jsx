import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import App from './App';

let container;
let root;
const click = async element => act(async () => element.dispatchEvent(new MouseEvent('click', { bubbles: true, button: 0 })));
const render = async () => act(async () => root.render(<App />));

beforeEach(() => {
  container = document.createElement('div');
  document.body.append(container);
  root = createRoot(container);
});

afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
  window.history.replaceState({}, '', '/');
  vi.restoreAllMocks();
});

it('switches project tabs with keyboard navigation and opens the matching case study', async () => {
  await render();
  const tabs = [...container.querySelectorAll('[role="tab"]')];
  expect(tabs[1].getAttribute('aria-selected')).toBe('true');
  await click(tabs[2]);
  expect(container.querySelector('[role="tabpanel"]').textContent).toContain('parents');
  await act(async () => tabs[2].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })));
  expect(document.activeElement).toBe(tabs[3]);
  expect(tabs[3].getAttribute('aria-selected')).toBe('true');
  const explore = container.querySelector('[role="tabpanel"] a');
  await click(explore);
  expect(window.location.pathname).toBe('/projects');
  expect(window.location.search).toBe('?project=testify');
  expect(container.querySelector('.project-contribution').textContent).toContain('Co-founded and developed');
  await click([...container.querySelectorAll('[role="tab"]')].find(tab => tab.textContent === 'GradeAccess'));
  expect(window.location.search).toBe('?project=gradeaccess');
  expect(window.location.hash).toBe('#selected-work');
});

it('collapses and restores a terminal window without losing its content', async () => {
  await render();
  const button = container.querySelector('[aria-label="Collapse experience.log"]');
  const content = document.getElementById(button.getAttribute('aria-controls'));
  await click(button);
  expect(content.hidden).toBe(true);
  expect(button.getAttribute('aria-expanded')).toBe('false');
  await click(button);
  expect(content.hidden).toBe(false);
  expect(content.textContent).toContain('Redcare Pharmacy');
});

it('maximizes a window, traps keyboard focus, and restores it with Escape', async () => {
  await render();
  const button = container.querySelector('[aria-label="Maximize experience.log"]');
  button.focus();
  await click(button);
  const dialog = container.querySelector('[role="dialog"]');
  expect(dialog.getAttribute('aria-modal')).toBe('true');
  expect(document.body.style.overflow).toBe('hidden');
  const links = dialog.querySelectorAll('a');
  links[links.length - 1].focus();
  await act(async () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true })));
  expect(document.activeElement).toBe(dialog.querySelector('button'));
  await act(async () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })));
  expect(container.querySelector('[role="dialog"]')).toBeNull();
  expect(document.body.style.overflow).not.toBe('hidden');
  expect(document.activeElement).toBe(button);
});

it('closes the mobile menu when following a page link and retains About content', async () => {
  await render();
  const toggle = container.querySelector('.mobile-menu');
  await click(toggle);
  expect(toggle.getAttribute('aria-expanded')).toBe('true');
  await click(container.querySelector('.top-navigation a[href="/about"]'));
  expect(window.location.pathname).toBe('/about');
  expect(container.querySelector('.mobile-menu').getAttribute('aria-expanded')).toBe('false');
  expect(container.textContent).toContain('Ambrose Alli University');
  expect(container.textContent).toContain('Golden Award');
  expect(container.textContent).toContain('Data & infrastructure');
});

it('loads the full work history directly and handles an unknown project selection', async () => {
  window.history.replaceState({}, '', '/projects?project=unknown');
  await render();
  expect(container.querySelectorAll('.timeline-entry')).toHaveLength(7);
  expect(container.textContent).toContain('Codementor');
  expect(container.textContent).toContain('Oct 2021 — Present');
  expect(container.querySelector('[role="tabpanel"] h3').textContent).toBe('MindRight Health');
});

it('renders all verified CV content and invokes the print action', async () => {
  window.history.replaceState({}, '', '/resume');
  const print = vi.spyOn(window, 'print').mockImplementation(() => {});
  await render();
  expect(container.querySelector('.cv-header h2').textContent).toBe('Seyi Adekoya');
  expect(container.querySelectorAll('.cv-job')).toHaveLength(11);
  expect(container.querySelector('.cv-content').textContent).toContain('Codementor');
  expect(container.querySelector('.cv-content').textContent).toContain('Ambrose Alli University');
  await click(container.querySelector('.cv-print'));
  expect(print).toHaveBeenCalledOnce();
});


it.each([
  ['Redcare Pharmacy', 'redcare'],
  ['Doctolib', 'doctolib'],
  ['Wunderflats', 'wunderflats'],
  ['MindRight Health', 'mindright'],
  ['Andela', 'andela'],
  ['Codementor', 'codementor'],
  ['Testify', 'testify'],
])('opens %s from experience.log in selected-work/', async (company, id) => {
  window.history.replaceState({}, '', '/projects?project=gradeaccess#selected-work');
  await render();
  const link = [...container.querySelectorAll('.timeline-company a')].find(item => item.textContent === company);
  await click(link);
  expect(window.location.search).toBe(`?project=${id}`);
  expect(window.location.hash).toBe('#selected-work');
  expect(container.querySelector('[role="tabpanel"] h3').textContent).toBe(company);
  expect(container.querySelector('[role="tab"][aria-selected="true"]').textContent).toBe(company === 'MindRight Health' ? 'MindRight' : company);
  expect(container.querySelector('.project-description').textContent.length).toBeGreaterThan(0);
});

it('reveals workplace details when selected work is collapsed and experience is maximized', async () => {
  window.history.replaceState({}, '', '/projects?project=gradeaccess#selected-work');
  await render();
  await click(container.querySelector('[aria-label="Collapse selected-work/"]'));
  await click(container.querySelector('[aria-label="Maximize experience.log"]'));
  expect(container.querySelector('[role="dialog"]')).not.toBeNull();
  await click(container.querySelector('.timeline-company a'));
  expect(container.querySelector('[role="dialog"]')).toBeNull();
  expect(document.body.style.overflow).not.toBe('hidden');
  expect(container.querySelector('[aria-label="Collapse selected-work/"]').getAttribute('aria-expanded')).toBe('true');
  expect(container.querySelector('[role="tabpanel"] h3').textContent).toBe('Redcare Pharmacy');
});
