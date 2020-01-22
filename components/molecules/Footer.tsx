import { memo } from 'react'
import styled from 'styled-components'
import { Text } from 'atoms/Typography'
import { LAYOUT_DEFAULTS } from 'styles'

const {
  spacing,
  borderRadius,
  borderStyle,
  borderSize,
  mediaQueries
} = LAYOUT_DEFAULTS

export const StyledFooter = styled.footer`
  margin: ${spacing.large} 0 0 0;
  padding: ${spacing.large} ${spacing.large} 0;
  border-top: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.accent}`};

  @media ${mediaQueries.desktop} {
    padding: ${spacing.large};
  }
`

export const Footer = memo(() => (
  <StyledFooter>
    <Text transparent>Whoa!<br />You made it all the way down to the footer!</Text>
  </StyledFooter>
))
