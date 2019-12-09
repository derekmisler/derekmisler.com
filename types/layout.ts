import { HTMLProps, ImgHTMLAttributes } from 'react'

type SmMdLgSizes = 'small' | 'medium' | 'large'

type FlexAlignment = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'

export interface SmMdLgTypes {
  small: string
  medium: string
  large: string
}

export interface LayoutTypes {
  backgroundColor: string
  borderColor: string
  borderRadius: string
  borderSize: string
  borderStyle: string
  opacity: string
  transition: string
  mediaQueries: {
    mobile: string
    desktop: string
  }
  dropShadow: SmMdLgTypes
  widths: SmMdLgTypes
  spacing: SmMdLgTypes
}

export interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
  fileName: string
}

export interface StyledDivProps extends HTMLProps<HTMLDivElement> {
  as?: any
  ref?: any
}

export interface GridProps extends StyledDivProps {
  columns?: number
  columnsDesktop?: number
  padding?: SmMdLgSizes
  margin?: SmMdLgSizes
  gap?: SmMdLgSizes
  vAlign?: FlexAlignment
  hAlign?: FlexAlignment
  fullHeight?: boolean
}

export interface ColProps extends StyledDivProps {
  row?: boolean
  range?: number | string
  rangeDesktop?: number | string
  textAlign?: string
}

export interface StyledAnimatedProps extends StyledDivProps {
  animated?: boolean
}

export interface AnimatedProps extends StyledAnimatedProps {
  active?: boolean
  delay?: number
}
