import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'

const { borderColor, borderSize, spacing } = LAYOUT_DEFAULTS

export const Hr = styled.hr`
  background-color: ${borderColor};
  border: 0;
  color: ${borderColor};
  height: ${borderSize};
  margin: ${spacing.medium} auto;
`
