import { HTMLProps } from 'react'
import styled from 'styled-components'
import { TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  boldFontWeight,
  accentFontStyle,
  baseLetterSpacing
} = TYPOGRAPHY_DEFAULTS

const { spacing, borderRadius, borderStyle, borderSize } = LAYOUT_DEFAULTS

export interface StyledLinkProps extends HTMLProps<HTMLLinkElement> {
  href?: string
  variant?: 'text' | 'default'
}

export const Link = styled.a<StyledLinkProps>`
  font: unset;
  display: inline-block;
  color: ${({ theme }) => theme.link};
  font-size: inherit;
  font-weight: ${boldFontWeight};
  font-style: ${accentFontStyle};
  background-color: transparent;
  border: ${({ variant, theme }) =>
    variant === 'text' ? '0px' : `${borderSize} ${borderStyle} ${theme.link}`};
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
    color: ${({ variant, theme }) =>
    variant === 'text' ? theme.linkHover : theme.background};
    background-color: ${({ variant, theme }) => variant === 'text' ? 'transparent' : theme.linkHover};
    border-color: ${({ theme }) => theme.linkHover};
  }
`
