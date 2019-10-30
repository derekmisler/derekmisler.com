import styled from 'styled-components'
import { GridProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { spacing } = LAYOUT_DEFAULTS

export const Grid = styled('div')<GridProps>`
  display: grid;
  grid-template-columns: ${({ count = 1 }) => {
    const array = new Array(count)
    array.fill('auto')
    return array.join(' ')
  }};
  grid-gap: ${({ padding }) => (padding ? spacing.medium : 0)};
`
