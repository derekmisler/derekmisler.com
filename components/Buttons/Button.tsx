import { HTMLProps } from 'react'
import styled from 'styled-components'
import { TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  boldFontWeight,
  accentFontStyle,
  baseLetterSpacing
} = TYPOGRAPHY_DEFAULTS

const { spacing, borderRadius, borderStyle, borderSize } = LAYOUT_DEFAULTS

interface StyledButtonProps extends HTMLProps<HTMLButtonElement> {
  accent?: boolean
}

export const Button = styled.button<StyledButtonProps>`
  font: unset;
  display: inline-block;
  color: ${({ theme }) => theme.link};
  font-size: inherit;
  font-weight: ${boldFontWeight};
  font-style: ${accentFontStyle};
  background-color: transparent;
  border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
  text-decoration: none;
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
`
