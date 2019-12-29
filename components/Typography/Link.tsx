import { HTMLProps } from 'react'
import styled from 'styled-components'
import { TYPOGRAPHY_DEFAULTS } from 'styles'

const {
  boldFontWeight,
  accentFontStyle,
  baseLetterSpacing,
  baseFontSize,
  baseFontFamily
} = TYPOGRAPHY_DEFAULTS

export const Link = styled.a<HTMLProps<HTMLLinkElement>>`
  font: unset;
  color: ${({ theme }) => theme.link};
  font-family: ${baseFontFamily};
  font-size: ${baseFontSize};
  word-wrap: break-word;
  text-decoration: none;
  font-weight: ${boldFontWeight};
  font-style: ${accentFontStyle};
  letter-spacing: ${baseLetterSpacing};
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.linkHover};
  }
`
