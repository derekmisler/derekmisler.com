import { createGlobalStyle } from 'styled-components'
import { FontStyle, FontWeight } from 'types/typography'
import { TYPOGRAPHY_DEFAULTS } from './typography'
import { blue } from './colors'

export const GlobalTypeStyles = createGlobalStyle`
  body {
    background-color: ${blue};
    color: ${TYPOGRAPHY_DEFAULTS.textColor};
    font-family: ${TYPOGRAPHY_DEFAULTS.sans};
    font-size: ${TYPOGRAPHY_DEFAULTS.baseFontSize};
    font-weight: ${FontWeight.Normal};
    font-style: ${FontStyle.Normal};
    line-height: ${TYPOGRAPHY_DEFAULTS.baseLineHeight};
  }
`

export * from './colors'
export * from './layout'
export * from './typography'
