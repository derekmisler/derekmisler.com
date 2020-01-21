import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS, StyledComponentProps } from 'styles'

interface ListItemProps extends StyledComponentProps {
  textAlign?: string
}

const { smallFontSize, smallLineHeight } = TYPOGRAPHY_DEFAULTS
const { spacing, mediaQueries } = LAYOUT_DEFAULTS

export const Li = styled.li<ListItemProps>`
  ${DEFAULT_TEXT_STYLES}
  font-size: ${smallFontSize.mobile};
  line-height: ${smallLineHeight};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  padding: ${spacing.medium} 0 0 ${spacing.small};
  @media ${mediaQueries.desktop} {
    font-size: ${smallFontSize.desktop};
    line-height: ${smallLineHeight};
  }
`
