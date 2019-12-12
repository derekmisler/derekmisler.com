import { memo, FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'

const { borderSize, spacing } = LAYOUT_DEFAULTS

const StyledHr = styled.hr<{ borderColor: string }>`
  background-color: ${({ borderColor }) => borderColor};
  border: 0;
  color: ${({ borderColor }) => borderColor};
  height: ${borderSize};
  margin: ${spacing.medium} auto;
`

export const Hr: FC<{}> = memo(() => {
  const { border } = useContext(ThemeContext)
  return <StyledHr borderColor={border} />
})
