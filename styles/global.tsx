import { useReducer } from 'react'
import { createGlobalStyle } from 'styled-components'
import { themeReducer, initialThemeState } from 'utils/reducers'
import { TYPOGRAPHY_DEFAULTS } from './typography'

const {
  baseFontWeight,
  baseLineHeight,
  baseFontFamily,
  baseFontSize
} = TYPOGRAPHY_DEFAULTS

interface GlobalStyleProps {
  backgroundColor: string
  textColor: string
}

export const GlobalTypeStyles = createGlobalStyle<GlobalStyleProps>`
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
  html { font-size: ${baseFontSize}; }
  body {
    background-color: ${({ backgroundColor }) => backgroundColor};
    font-family: ${baseFontFamily};
    font-weight: ${baseFontWeight};
    line-height: ${baseLineHeight};
    color: ${({ textColor }) => textColor};
  }
  ul, ol {
    list-style-type: none;
  }
`

export const GlobalStyle = () => {
  const [state] = useReducer(themeReducer, initialThemeState)
  return (
    <GlobalTypeStyles
      textColor={state.theme.text}
      backgroundColor={state.theme.background}
    />
  )
}
