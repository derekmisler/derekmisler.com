import { TypographyTypes } from 'types/typography'
import { black, orange, red } from './colors'

export const TYPOGRAPHY_DEFAULTS: TypographyTypes = {
  sans: '"Lato", "Helvetica Neue", Helvetica, sans-serif',
  serif: '"Patua One", serif',
  textColor: black,
  linkColor: orange,
  linkColorHover: red,
  baseFontSize: '16px',
  fontSizes: ['12vw', '12vw', '12vw', '12vw', '12vw', '12vw'],
  baseLineHeight: 1.5
}
