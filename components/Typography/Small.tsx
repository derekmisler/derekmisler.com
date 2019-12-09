import styled from 'styled-components'
import { TextProps } from 'types/typography'
import { TYPOGRAPHY_DEFAULTS } from 'styles/typography'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { smallFontSize, accentColor } = TYPOGRAPHY_DEFAULTS

const { opacity, mediaQueries } = LAYOUT_DEFAULTS

export const Small = styled.small<TextProps>`
  font-size: ${smallFontSize.mobile};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ accent }) => (accent ? accentColor : 'inherit')};
  @media ${mediaQueries.desktop} {
    font-size: ${smallFontSize.desktop};
  }
`
