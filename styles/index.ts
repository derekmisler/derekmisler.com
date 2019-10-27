import { createGlobalStyle } from 'styled-components'
import { TYPOGRAPHY_DEFAULTS } from './typography'
import { blue } from './colors'

export const GlobalTypeStyles = createGlobalStyle`
  html, body, div, span,
  h1, h2, h3, h4, h5, h6, p, pre,
  a, code, em, img,
  small, strong, ol, ul, li,
  article, aside,
  figure, figcaption, footer, header,
  menu, nav, section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, menu, nav, section {
    display: block;
  }
  html { font-size: ${TYPOGRAPHY_DEFAULTS.baseFontSize}; }
  body {
    background-color: ${blue};
    font-family: ${TYPOGRAPHY_DEFAULTS.sans};
    font-weight: ${TYPOGRAPHY_DEFAULTS.baseFontWeight};
    line-height: ${TYPOGRAPHY_DEFAULTS.baseLineHeight};
    color: ${TYPOGRAPHY_DEFAULTS.textColor};
  }
`

export * from './colors'
export * from './layout'
export * from './typography'
