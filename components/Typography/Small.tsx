import styled from 'styled-components'
import { TextProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const { smallFontSize } = TYPOGRAPHY_DEFAULTS
const { opacity } = LAYOUT_DEFAULTS

interface StyledSmallProps extends TextProps {
  transparent?: boolean
  accent?: boolean
}

export const Small = styled.small<StyledSmallProps>`
  font-size: ${smallFontSize};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ theme, accent }) => (accent ? theme.accent : undefined)};
`
