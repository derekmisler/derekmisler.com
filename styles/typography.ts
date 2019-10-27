import { TypographyTypes, FontWeight } from 'types/typography'
import { white, orange, red } from './colors'

export const TYPOGRAPHY_DEFAULTS: TypographyTypes = {
  sans: '"Lato", "Helvetica Neue", Helvetica, sans-serif',
  serif: '"Patua One", serif',
  textColor: white,
  linkColor: orange,
  linkColorHover: red,
  baseFontSize: '20px',
  smallFontSize: '0.75rem',
  headingFontSizes: [
    '4.209rem',
    '3.157rem',
    '2.369rem',
    '1.777rem',
    '1.333rem',
    '1rem'
  ],
  baseLineHeight: 1.5,
  headingLineHeight: 1.15,
  baseFontWeight: FontWeight.Normal
}
