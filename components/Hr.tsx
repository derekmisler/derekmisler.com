import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'

const { borderSize, spacing } = LAYOUT_DEFAULTS

export const Hr = styled.hr<{ accent?: boolean }>`
  background-color: ${({ accent, theme }) => accent ? theme.accent : theme.border};
  border: 0;
  color: ${({ accent, theme }) => accent ? theme.accent : theme.border};
  height: ${borderSize};
  margin: ${spacing.small} auto;
`
