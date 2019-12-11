import { DesktopMobile, FontWeight, FontStyle } from 'types'

interface TypographyTypes {
  baseFontFamily: string
  headingFontFamily: string
  baseFontSize: string
  textFontSize: DesktopMobile
  smallFontSize: DesktopMobile
  baseLetterSpacing: string
  headingFontSizes: {
    desktop: [string, string, string, string, string, string]
    mobile: [string, string, string, string, string, string]
  }
  baseLineHeight: number
  headingLineHeight: number
  baseFontWeight: FontWeight
  boldFontWeight: FontWeight
  headingFontWeight: FontWeight
  baseFontStyle: FontStyle
  accentFontStyle: FontStyle
}

export const TYPOGRAPHY_DEFAULTS: TypographyTypes = {
  baseFontFamily: 'mrs-eaves-xl-serif, serif',
  headingFontFamily: 'ohno-blazeface, serif',
  baseFontSize: '18px',
  textFontSize: {
    desktop: '2rem',
    mobile: '3vw'
  },
  smallFontSize: {
    desktop: '.65em',
    mobile: '.85em'
  },
  baseLetterSpacing: '0.5px',
  headingFontSizes: {
    desktop: ['14vw', '4rem', '3rem', '2.5rem', '1.5rem', '1rem'],
    mobile: ['22vw', '14vw', '10vw', '8vw', '5vw', '1rem']
  },
  baseLineHeight: 1.65,
  headingLineHeight: 1,
  baseFontWeight: FontWeight.Normal,
  boldFontWeight: FontWeight.Bold,
  headingFontWeight: FontWeight.Heavy,
  baseFontStyle: FontStyle.Normal,
  accentFontStyle: FontStyle.Italic
}
