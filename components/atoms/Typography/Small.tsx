import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, TextProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'
import { Text } from 'atoms/Typography'

const { smallFontSize, smallLineHeight } = TYPOGRAPHY_DEFAULTS
const { opacity, mediaQueries } = LAYOUT_DEFAULTS

interface StyledSmallProps extends TextProps {
  transparent?: boolean
  accent?: boolean
}

export const Small = styled.small<StyledSmallProps>`
  ${DEFAULT_TEXT_STYLES}
  font-size: ${smallFontSize.mobile};
  line-height: ${smallLineHeight};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ theme, accent }) => (accent ? theme.accent : undefined)};
  @media ${mediaQueries.desktop} {
    font-size: ${smallFontSize.desktop};
    line-height: ${smallLineHeight};
  }
`
