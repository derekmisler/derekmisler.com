import styled from 'styled-components'
import { GridProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { generateResponsiveRow } from 'utils/generateResponsiveGrid'

const { spacing, mediaQueries } = LAYOUT_DEFAULTS

const StyledGrid = styled.div<GridProps>`
  display: grid;
  overflow: hidden;
  padding: ${({ padding }) => (padding ? spacing[padding] : 0)};
  margin: 0 auto;
  margin-bottom: ${({ margin }) => (margin ? spacing[margin] : 0)};
  grid-column-gap: ${({ gap }) => (gap ? spacing[gap] : 0)};
  align-items: ${({ vAlign = 'stretch' }) => vAlign};
  justify-items: ${({ hAlign = 'stretch' }) => hAlign};
  ${({ columns = 8 }) => generateResponsiveRow(columns)}

  @media ${mediaQueries.desktop} {
    min-height: ${({ fullHeight }) => (fullHeight ? `100vh` : `auto`)};
    ${({ columnsDesktop }) => generateResponsiveRow(columnsDesktop)}
  }
`

export const Row: React.FC<GridProps> = props => <StyledGrid {...props} />
