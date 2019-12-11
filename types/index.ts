import { HTMLProps } from 'react'

export type SmMdLgSizes = 'small' | 'medium' | 'large'

export interface SmMdLgTypes {
  small: string
  medium: string
  large: string
}

export interface DesktopMobile {
  desktop: string
  mobile: string
}

export interface StyledComponentProps extends HTMLProps<HTMLDivElement> {
  as?: any
  ref?: any
}

export * from './actions'
export * from './colors'
export * from './layout'
export * from './reducers'
export * from './typography'
