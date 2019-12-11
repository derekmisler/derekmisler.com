import { FC, memo } from 'react'
import styled, { css } from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'
import { generateResponsiveCols } from 'utils/generateResponsiveGrid'
import { StyledComponentProps } from 'types'

const { mediaQueries } = LAYOUT_DEFAULTS

interface ColProps extends StyledComponentProps {
  row?: boolean
  range?: number | string
  rangeDesktop?: number | string
  textAlign?: string
}
const StyledCol = styled.div<ColProps>`
  display: block;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ${({ range = '', rangeDesktop = '' }) => {
    if (!(range || rangeDesktop)) return null
    return css`
      ${generateResponsiveCols(range)}
      @media ${mediaQueries.desktop} {
        ${generateResponsiveCols(rangeDesktop)}
      }
    `
  }}
`

export const Col: FC<ColProps> = memo(props => <StyledCol {...props} />)
