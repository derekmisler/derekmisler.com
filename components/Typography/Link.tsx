import { HTMLProps, useReducer, memo, FC } from 'react'
import { themeReducer, initialThemeState } from 'utils/reducers'
import styled from 'styled-components'
import { TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  boldFontWeight,
  accentFontStyle,
  baseLetterSpacing
} = TYPOGRAPHY_DEFAULTS

const {
  spacing,
  borderRadius,
  borderStyle,
  borderSize
} = LAYOUT_DEFAULTS

export interface LinkProps extends HTMLProps<HTMLLinkElement> {
  href?: string
  variant?: 'text' | 'default'
}

export interface StyledLinkProps extends LinkProps {
  linkColor: string
  linkColorHover: string
  backgroundColor: string
  variant?: 'text' | 'default'
}

export const StyledLink = styled.a<StyledLinkProps>`
  font: unset;
  display: inline-block;
  color: ${({ linkColor }) => linkColor};
  font-size: inherit;
  font-weight: ${boldFontWeight};
  font-style: ${accentFontStyle};
  background-color: transparent;
  border: ${({ variant, linkColor }) =>
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
    color: ${({ variant, linkColorHover, backgroundColor }) =>
    variant === 'text' ? linkColorHover : backgroundColor};
    background-color: ${({ variant, linkColorHover }) =>
    variant === 'text' ? 'transparent' : linkColorHover};
    border-color: ${({ linkColorHover }) => linkColorHover};
}
`

export const Link: FC<LinkProps> = memo(({ variant, children }) => {
  const [state] = useReducer(themeReducer, initialThemeState)
  return (
    <StyledLink
      variant={variant}
      linkColor={state.theme.link}
      linkColorHover={state.theme.linkHover}
      backgroundColor={state.theme.background}
    >
      {children}
    </StyledLink>
  )
})
