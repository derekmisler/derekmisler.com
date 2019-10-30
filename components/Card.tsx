import styled from 'styled-components'
import { CardProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { spacing } = LAYOUT_DEFAULTS

export const Card = styled('div')<CardProps>`
  display: grid;
  grid-template-columns: ${({ columns = 1 }) => {
    const array = new Array(columns)
    return array.fill('auto').join(' ')
  }};
  > * {
    padding: ${({ padding }) => (padding ? spacing[padding] : 0)};
  }
`
