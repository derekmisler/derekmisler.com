import styled from 'styled-components'
import { LinkProps } from 'types/typography'
import { TYPOGRAPHY_DEFAULTS } from 'styles/typography'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const {
  boldFontWeight,
  accentFontStyle,
  baseLetterSpacing,
  linkColor,
  linkColorHover
} = TYPOGRAPHY_DEFAULTS

const {
  spacing,
  borderRadius,
  borderStyle,
  borderSize,
  backgroundColor
} = LAYOUT_DEFAULTS

export const Link = styled.a<LinkProps>`
  font: unset;
  display: inline-block;
  color: ${linkColor};
  font-size: inherit;
  font-weight: ${boldFontWeight};
  font-style: ${accentFontStyle};
  background-color: transparent;
  border: ${({ variant }) =>
    variant === 'text' ? '0px' : `${borderSize} ${borderStyle} ${linkColor}`};
  text-decoration: none;
  padding: ${({ variant }) =>
    variant === 'text' ? '0px' : `${spacing.small} ${spacing.medium}`};
  border-radius: ${borderRadius};
  width: fit-content;
  letter-spacing: ${baseLetterSpacing};
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: ${({ variant }) =>
    variant === 'text' ? linkColorHover : backgroundColor};
    background-color: ${({ variant }) =>
    variant === 'text' ? 'transparent' : linkColorHover};
    border-color: ${linkColorHover};
  }
`
