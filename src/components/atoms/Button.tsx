import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from '@/styles/layout'
import { TYPOGRAPHY_DEFAULTS, DEFAULT_TEXT_STYLES } from '@/styles/typography'

const { buttonFontSize } = TYPOGRAPHY_DEFAULTS

const { spacing, borderRadius, borderStyle, borderSize, mediaQueries } = LAYOUT_DEFAULTS

interface StyledButtonProps {
  accent?: boolean
  href?: string
  download?: boolean
}

export const Button = styled.button.attrs<StyledButtonProps>(({ href }) => ({
  as: href ? 'a' : 'button'
}))<StyledButtonProps>`
  ${DEFAULT_TEXT_STYLES}
  font-size: ${buttonFontSize.mobile};
  display: inline-block;
  color: ${({ theme }) => theme.link};
  background-color: transparent;
  border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
  text-decoration: none;
  text-transform: uppercase;
  padding: ${spacing.small} ${spacing.medium};
  margin: 0 ${spacing.small} ${spacing.small} 0;
  border-radius: ${borderRadius};
  width: fit-content;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.linkHover};
    border-color: ${({ theme }) => theme.linkHover};
  }

  @media ${mediaQueries.desktop} {
    font-size: ${buttonFontSize.desktop};
  }
`
