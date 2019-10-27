import { HTMLProps } from 'react'

export interface TypographyTypes {
  sans: string
  serif: string
  textColor: string
  linkColor: string
  linkColorHover: string
  baseFontSize: string
  smallFontSize: string
  headingFontSizes: [string, string, string, string, string, string]
  baseLineHeight: number
  headingLineHeight: number
  baseFontWeight: string
}

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

export type HeadingProps = { level: 1 | 2 | 3 | 4 | 5 | 6 } & HTMLProps<
  HTMLDivElement
>
