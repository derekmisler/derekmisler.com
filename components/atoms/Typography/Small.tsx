import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, TextProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'
import { Text } from 'atoms/Typography'

const { smallFontSize, smallLineHeight } = TYPOGRAPHY_DEFAULTS
const { opacity, mediaQueries, spacing } = LAYOUT_DEFAULTS

interface StyledSmallProps extends TextProps {
  accent?: boolean
}

export const Small = styled.small<StyledSmallProps>`
  ${DEFAULT_TEXT_STYLES}
  font-size: ${smallFontSize.mobile};
  line-height: ${smallLineHeight};
  color: ${({ theme, accent }) => (accent ? theme.accent : undefined)};
  @media ${mediaQueries.desktop} {
    font-size: ${smallFontSize.desktop};
    line-height: ${smallLineHeight};
  }
`
