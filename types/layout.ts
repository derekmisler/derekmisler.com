import { HTMLProps } from 'react'

export interface LayoutTypes {
  navHeight: number
  backgroundColor: string
  borderColor: string
  widths: [string, string, string]
}

export type ContainerProps = {
  level: 1 | 2 | 3
  fullHeight?: boolean
} & HTMLProps<HTMLDivElement>
