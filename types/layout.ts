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
  borderRadius: string
  borderStyle: string
  opacity: string
  widths: SmMdLgTypes
  spacing: SmMdLgTypes
}

export enum SmMdLgWidths {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum CardAlignment {
  Start = 'start',
  End = 'end',
  Center = 'center',
  Stretch = 'stretch',
  SpaceAround = 'space-around',
  SpaceBetween = 'space-between',
  SpaceEvenly = 'space-evenly'
}

export interface ContainerProps extends HTMLProps<HTMLDivElement> {
  width: SmMdLgWidths
  fullHeight?: boolean
  fullWidth?: boolean
}

export interface StyledCardProps extends HTMLProps<HTMLDivElement> {
  columns?: number | string
  padding?: SmMdLgWidths
  gap?: SmMdLgWidths
  align?: CardAlignment
  animated?: boolean
  noAnimation?: boolean
}

export interface CardProps extends StyledCardProps {
  as?: any
  delay?: number
}
