import styled from 'styled-components'
import { GridProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { spacing } = LAYOUT_DEFAULTS

export const Grid = styled('div')<GridProps>`
  display: grid;
  grid-template-columns: ${({ columns = 1 }) => {
    const array = new Array(columns)
    return array.fill('auto').join(' ')
  }};
  > * {
    padding: ${({ padding }) => (padding ? spacing[padding] : 0)};
  }
`
