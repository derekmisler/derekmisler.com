import { TypographyTypes, FontWeight, FontStyle } from 'types/typography'
import { white, blue, darkBlue, yellow } from './colors'

export const TYPOGRAPHY_DEFAULTS: TypographyTypes = {
  baseFontFamily: '"Lora", serif',
  headingFontFamily: '"Patua One", serif',
  textColor: white,
  accentColor: yellow,
  linkColor: blue,
  linkColorHover: darkBlue,
  baseFontSize: '20px',
  smallFontSize: '0.65em',
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
  baseFontWeight: FontWeight.Normal,
  baseFontStyle: FontStyle.Normal
}
