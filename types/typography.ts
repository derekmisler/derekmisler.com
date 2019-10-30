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
  smallFontSize: string
  headingFontSizes: [string, string, string, string, string, string]
  baseLineHeight: number
  headingLineHeight: number
  baseFontWeight: FontWeight
  baseFontStyle: FontStyle
}

export type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
} & HTMLProps<HTMLDivElement>

export type TextProps = {
  transparent?: boolean
  accent?: boolean
} & HTMLProps<HTMLParagraphElement>

export type LinkProps = {
  variant?: 'text' | 'default'
} & HTMLProps<HTMLLinkElement>
