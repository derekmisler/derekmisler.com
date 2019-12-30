import styled from 'styled-components'
import { TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  boldFontWeight,
  accentFontStyle,
  baseLetterSpacing,
  buttonFontSize
} = TYPOGRAPHY_DEFAULTS

const {
  spacing,
  borderRadius,
  borderStyle,
  borderSize,
  mediaQueries
} = LAYOUT_DEFAULTS

interface StyledButtonProps {
  accent?: boolean
  href?: string
}

export const Button = styled.button.attrs<StyledButtonProps>(({ href }) => ({
  as: href ? 'a' : 'button'
}))<StyledButtonProps>`
  font: unset;
  display: inline-block;
  color: ${({ theme }) => theme.link};
  font-size: ${buttonFontSize.mobile};
  font-weight: ${boldFontWeight};
  font-style: ${accentFontStyle};
  background-color: transparent;
  border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
  text-decoration: none;
  text-transform: uppercase;
  padding: ${spacing.small} ${spacing.medium};
  border-radius: ${borderRadius};
  width: fit-content;
  letter-spacing: ${baseLetterSpacing};
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
