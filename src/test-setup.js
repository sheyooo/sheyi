import { vi } from 'vitest';
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
window.scrollTo = vi.fn();
Element.prototype.scrollIntoView = vi.fn();
