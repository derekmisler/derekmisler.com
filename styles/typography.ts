import { HTMLProps } from 'react'
import { DesktopMobile } from './layout'

type FontStyle = 'italic' | 'normal'
type BaseFontWeight = '400' | '500' | '700'
type HeadingFontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '900'

export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  textAlign?: string
  textAlignDesktop?: string
  transparent?: boolean
  accent?: boolean
  bold?: boolean
  inline?: boolean
  columns?: number
}

interface TypographyTypes {
  baseFontFamily: string
  headingFontFamily: string
  htmlFontSize: string
  baseFontSize: DesktopMobile
  smallFontSize: DesktopMobile
  baseLetterSpacing: string
  headingFontSizes: [string, string, string, string, string, string]
  headingLineHeights: [number, number, number, number, number, number]
  headingLetterSpacing: [string, string, string, string, string, string]
  headingFontWeights: [HeadingFontWeight, HeadingFontWeight, HeadingFontWeight, HeadingFontWeight, HeadingFontWeight, HeadingFontWeight]
  baseLineHeight: number
  baseFontWeight: BaseFontWeight
  boldFontWeight: BaseFontWeight
  baseFontStyle: FontStyle
  accentFontStyle: FontStyle
  minColWidth: string
}

export const TYPOGRAPHY_DEFAULTS: TypographyTypes = {
  baseFontFamily: 'neue-haas-grotesk-text, sans-serif;',
  headingFontFamily: 'neue-haas-grotesk-display, sans-serif;',
  htmlFontSize: '16px',
  baseFontSize: {
    desktop: '2rem',
    mobile: '2rem'
  },
  smallFontSize: {
    desktop: '.65em',
    mobile: '.85em'
  },
  baseLetterSpacing: '0.00938em',
  baseLineHeight: 1.65,
  baseFontWeight: '500',
  boldFontWeight: '500',
  baseFontStyle: 'normal',
  accentFontStyle: 'normal',
  headingFontSizes: ['6em', '3.75em', '3em', '2.125em', '1.5em', '1em'],
  headingLineHeights: [1.167, 1.2, 1.167, 1.235, 1.334, 1.6],
  headingLetterSpacing: ['-0.01562em', '-0.00833em', '0em', '0.00735em', '0em', '0.0075em'],
  headingFontWeights: ['600', '600', '600', '600', '600', '600'],
  minColWidth: `16ch`

}
