import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS, StyledComponentProps } from 'styles'

interface ListItemProps extends StyledComponentProps {
  textAlign?: string
}

const { baseFontSize, smallLineHeight } = TYPOGRAPHY_DEFAULTS
const { spacing, mediaQueries } = LAYOUT_DEFAULTS

export const Li = styled.li<ListItemProps>`
  ${DEFAULT_TEXT_STYLES}
  font-size: ${baseFontSize.mobile};
  line-height: ${smallLineHeight};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  padding: ${spacing.medium} 0 0 0;
  @media ${mediaQueries.desktop} {
    font-size: ${baseFontSize.desktop};
    line-height: ${smallLineHeight};
  }
`
