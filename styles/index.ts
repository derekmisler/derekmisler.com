import { createGlobalStyle } from 'styled-components'
import { TYPOGRAPHY_DEFAULTS } from './typography'
import { LAYOUT_DEFAULTS } from './layout'

const {
  baseFontWeight,
  baseLineHeight,
  baseFontFamily,
  textColor
} = TYPOGRAPHY_DEFAULTS

const { backgroundColor } = LAYOUT_DEFAULTS

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
  html { font-size: 20px; }
  body {
    background-color: ${backgroundColor};
    font-family: ${baseFontFamily};
    font-weight: ${baseFontWeight};
    line-height: ${baseLineHeight};
    color: ${textColor};
  }
  ul, ol {
    list-style-type: none;
  }
`

export * from './colors'
export * from './layout'
export * from './typography'
