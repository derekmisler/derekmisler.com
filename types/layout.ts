import { HTMLProps } from 'react'

export interface LayoutTypes {
  navHeight: number
  backgroundColor: string
  borderColor: string
}

export type ContainerProps = { level: 1 | 2 | 3 | 4 | 5 | 6 } & HTMLProps<
  HTMLDivElement
>
