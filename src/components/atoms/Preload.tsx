'use client';

import ReactDOM from 'react-dom';

export function Preload() {
  if (process.env.NODE_ENV !== 'production') return null;

  ReactDOM.preload('https://fonts.adobe.com', { as: 'script' });
  ReactDOM.preload('https://use.typekit.net', { as: 'font' });
  return null;
}
