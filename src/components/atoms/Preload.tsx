'use client'

import ReactDOM from 'react-dom'

export function Preload() {
  ReactDOM.preload('https://fonts.adobe.com', { as: 'script' });
  ReactDOM.preload('https://use.typekit.net', { as: 'font' });
  return null
}


{/* <link rel="preload" as="script" href="https://fonts.adobe.com" />
<link rel="preload" as="font" href="https://use.typekit.net" /> */}
