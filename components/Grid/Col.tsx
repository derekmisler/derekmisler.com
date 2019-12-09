import styled, { css } from 'styled-components'
import { ColProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { generateResponsiveCols } from 'utils/generateResponsiveGrid'

const { mediaQueries } = LAYOUT_DEFAULTS

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

export const Col: React.FC<ColProps> = props => <StyledCol {...props} />
