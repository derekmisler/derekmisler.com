import { HTMLProps } from 'react'

export interface SmMdLgTypes {
  small: string
  medium: string
  large: string
}

export interface LayoutTypes {
  navHeight: number
  backgroundColor: string
  borderColor: string
  widths: SmMdLgTypes
  spacing: SmMdLgTypes
}

export enum SmMdLgWidths {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface ContainerProps extends HTMLProps<HTMLDivElement> {
  width: SmMdLgWidths
  fullHeight?: boolean
  fullWidth?: boolean
}

export interface GridProps {
  columns?: number
  padding?: SmMdLgWidths
}
