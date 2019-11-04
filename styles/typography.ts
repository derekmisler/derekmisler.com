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
  textFontSize: '1.25em',
  smallFontSize: '0.65em',
  baseLetterSpacing: '0.5px',
  headingFontSizes: {
    h1: '4.209em',
    h2: '3.157em',
    h3: '2.369em',
    h4: '1.777em',
    h5: '1.333em',
    h6: '1em'
  },
  baseLineHeight: 1.5,
  headingLineHeight: 1.15,
  baseFontWeight: FontWeight.Normal,
  accentFontWeight: FontWeight.Bold,
  baseFontStyle: FontStyle.Normal,
  accentFontStyle: FontStyle.Italic
}
