import { HTMLProps } from 'react'

export interface WidthTypes {
  small: string
  medium: string
  large: string
}

export interface LayoutTypes {
  navHeight: number
  backgroundColor: string
  borderColor: string
  widths: WidthTypes
}

export enum ContainerWidths {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export type ContainerProps = {
  width: ContainerWidths
  fullHeight?: boolean
  fullWidth?: boolean
} & HTMLProps<HTMLDivElement>
