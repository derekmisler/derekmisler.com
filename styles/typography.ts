import { HTMLProps } from 'react'
import { DesktopMobile } from './layout'

export enum FontStyle {
  Italic = 'italic',
  Normal = 'normal',
  Inherit = 'inherit'
}

export enum FontWeight {
  UltraThin = '100',
  Thin = '200',
  Light = '300',
  Normal = '400',
  Medium = '500',
  Bold = '700',
  Black = '900',
  Inherit = 'inherit'
}

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
  minColWidth: string
}

export const TYPOGRAPHY_DEFAULTS: TypographyTypes = {
  baseFontFamily: 'neue-haas-grotesk-text, sans-serif;',
  headingFontFamily: 'neue-haas-grotesk-display, sans-serif;',
  baseFontSize: '16px',
  textFontSize: {
    desktop: '2rem',
    mobile: '2rem'
  },
  smallFontSize: {
    desktop: '.65em',
    mobile: '.85em'
  },
  baseLetterSpacing: '0.5px',
  headingFontSizes: {
    desktop: ['17.942em', '11.089em', '6.854em', '4.236em', '2.618em', '1.618em'],
    mobile: ['6.854em', '4.236em', '2.618em', '1.618em', '1em', '.85em']
  },
  baseLineHeight: 1.65,
  headingLineHeight: 1,
  baseFontWeight: FontWeight.Medium,
  boldFontWeight: FontWeight.Medium,
  headingFontWeight: FontWeight.Bold,
  baseFontStyle: FontStyle.Normal,
  accentFontStyle: FontStyle.Normal,
  minColWidth: `16ch`

}
