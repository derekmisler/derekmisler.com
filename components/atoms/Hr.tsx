import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'

const { borderSize, borderSizeLarge, spacing } = LAYOUT_DEFAULTS

export const Hr = styled.hr<{ accent?: boolean, large?: boolean }>`
  background-color: ${({ accent, theme }) => accent ? theme.accent : theme.border};
  border: 0;
  color: ${({ accent, theme }) => accent ? theme.accent : theme.border};
  height: ${({ large }) => large ? borderSizeLarge : borderSize};
  margin: ${spacing.small} auto;
`
