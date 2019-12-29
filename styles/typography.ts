import { HTMLProps } from 'react'

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
  baseFontSize: string
  smallFontSize: string
  buttonFontSize: string
  baseLetterSpacing: string
  headingFontSizes: [string, string, string, string, string, string]
  headingLineHeights: [number, number, number, number, number, number]
  headingLetterSpacing: [string, string, string, string, string, string]
  headingFontWeights: HeadingFontWeight[]
  baseLineHeight: number
  baseFontWeight: BaseFontWeight
  boldFontWeight: BaseFontWeight
  baseFontStyle: FontStyle
  accentFontStyle: FontStyle
  minColWidth: string
}

export const BASE_MEASURE = 16

export const TYPOGRAPHY_DEFAULTS: TypographyTypes = {
  baseFontFamily: 'neue-haas-grotesk-text, sans-serif;',
  headingFontFamily: 'neue-haas-grotesk-display, sans-serif;',
  htmlFontSize: `${BASE_MEASURE}px`,
  baseFontSize: '1.75rem',
  smallFontSize: '.65em',
  buttonFontSize: '1.35rem',
  baseLetterSpacing: '0.00938em',
  baseLineHeight: 1.65,
  baseFontWeight: '500',
  boldFontWeight: '500',
  baseFontStyle: 'normal',
  accentFontStyle: 'normal',
  headingFontSizes: ['7.75rem', '5.5rem', '3.75rem', '3rem', '2.125rem', '1.5rem'],
  headingLineHeights: [1.167, 1.2, 1.167, 1.235, 1.334, 1.6],
  headingLetterSpacing: ['-0.01562em', '-0.00833em', '0em', '0.00735em', '0em', '0.0075em'],
  headingFontWeights: new Array(6).fill('600'),
  minColWidth: `${BASE_MEASURE}ch`

}
