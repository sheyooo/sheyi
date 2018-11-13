import React from 'react';

export const OverlayContext = React.createContext({
  isOverlayActive: false,
  setOverlayStateFn: () => {}
  // onOverlayClick: () => {}
});
