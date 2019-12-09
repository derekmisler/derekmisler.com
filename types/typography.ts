import { HTMLProps } from 'react'

export enum FontStyle {
  Italic = 'italic',
  Normal = 'normal',
  Inherit = 'inherit'
}

export enum FontWeight {
  Normal = '400',
  Bold = '800',
  Heavy = '900',
  Inherit = 'inherit'
}

export interface DesktopMobile {
  desktop: string
  mobile: string
}

export interface TypographyTypes {
  baseFontFamily: string
  headingFontFamily: string
  textColor: string
  accentColor: string
  linkColor: string
  linkColorHover: string
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

export type HeadingProps = {
  textAlign?: string
  level?: number
  as?: string
} & HTMLProps<HTMLDivElement>

export type TextProps = {
  textAlign?: string
  textAlignDesktop?: string
  transparent?: boolean
  accent?: boolean
  bold?: boolean
  inline?: boolean
} & HTMLProps<HTMLParagraphElement>

export type LinkProps = {
  onClick?: Function
  variant?: 'text' | 'default'
} & HTMLProps<HTMLLinkElement>
