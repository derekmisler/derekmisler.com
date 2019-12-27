import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'

const { borderSize, spacing } = LAYOUT_DEFAULTS

export const Hr = styled.hr`
  background-color: ${({ theme }) => theme.border};
  border: 0;
  color: ${({ theme }) => theme.border};
  height: ${borderSize};
  margin: ${spacing.medium} auto;
`
