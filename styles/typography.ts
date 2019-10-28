import { TypographyTypes, FontWeight } from 'types/typography'
import { white, orange, red } from './colors'

export const TYPOGRAPHY_DEFAULTS: TypographyTypes = {
  sans: '"Lato", "Helvetica Neue", Helvetica, sans-serif',
  serif: '"Patua One", serif',
  textColor: white,
  linkColor: orange,
  linkColorHover: red,
  baseFontSize: '20px',
  smallFontSize: '0.75em',
  headingFontSizes: [
    '4.209em',
    '3.157em',
    '2.369em',
    '1.777em',
    '1.333em',
    '1em'
  ],
  baseLineHeight: 1.5,
  headingLineHeight: 1.15,
  baseFontWeight: FontWeight.Normal
}
