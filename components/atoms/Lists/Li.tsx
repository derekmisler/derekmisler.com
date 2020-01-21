import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, LAYOUT_DEFAULTS, StyledComponentProps } from 'styles'

interface ListItemProps extends StyledComponentProps {
  textAlign?: string
}

const { spacing } = LAYOUT_DEFAULTS

export const Li = styled.li<ListItemProps>`
  ${DEFAULT_TEXT_STYLES}
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  padding: ${spacing.medium} 0 ${spacing.small} ${spacing.small};
  line-height: 1;
`
