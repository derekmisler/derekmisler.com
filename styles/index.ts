import { createGlobalStyle } from 'styled-components'
import { TypeSettings, FontStyle, FontWeight } from '../components/Typography'
import { blue } from './colors'

export const GlobalTypeStyles = createGlobalStyle`
body {
  background-color: ${blue};
  color: ${TypeSettings.textColor};
  font-family: ${TypeSettings.sans};
  font-size: ${TypeSettings.baseFontSize};
  font-weight: ${FontWeight.Normal};
  font-style: ${FontStyle.Normal};
  line-height: ${TypeSettings.baseLineHeight};
}
`

export * from './colors'
export * from './layout'
