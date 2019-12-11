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

export interface TextProps extends HTMLProps<HTMLParagraphElement> {
  textAlign?: string
  textAlignDesktop?: string
  transparent?: boolean
  accent?: boolean
  bold?: boolean
  inline?: boolean
}
