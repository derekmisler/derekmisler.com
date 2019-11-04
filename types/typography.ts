import { HTMLProps } from 'react'

export enum FontStyle {
  Italic = 'italic',
  Normal = 'normal',
  Inherit = 'inherit'
}

export enum FontWeight {
  Normal = '400',
  Bold = '700',
  Inherit = 'inherit'
}

export interface TypographyTypes {
  baseFontFamily: string
  headingFontFamily: string
  textColor: string
  accentColor: string
  linkColor: string
  linkColorHover: string
  baseFontSize: string
  textFontSize: string
  smallFontSize: string
  baseLetterSpacing: string
  headingFontSizes: [string, string, string, string, string, string]
  baseLineHeight: number
  headingLineHeight: number
  baseFontWeight: FontWeight
  accentFontWeight: FontWeight
  baseFontStyle: FontStyle
  accentFontStyle: FontStyle
}

export type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  as?: string
} & HTMLProps<HTMLDivElement>

export type TextProps = {
  transparent?: boolean
  accent?: boolean
} & HTMLProps<HTMLParagraphElement>

export type LinkProps = {
  variant?: 'text' | 'default'
} & HTMLProps<HTMLLinkElement>
