import styled from 'styled-components'
import { HTMLProps, useReducer, memo, FC } from 'react'
import { themeReducer, initialThemeState } from 'utils/reducers'
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

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  accent?: boolean
}

interface StyledButtonProps {
  linkColor: string
  linkColorHover: string
  backgroundColor: string
}

const StyledButton = styled.button<StyledButtonProps>`
  font: unset;
  display: inline-block;
  color: ${({ linkColor }) => linkColor};
  font-size: inherit;
  font-weight: ${boldFontWeight};
  font-style: ${accentFontStyle};
  background-color: transparent;
  border: ${({ linkColor }) => `${borderSize} ${borderStyle} ${linkColor}`};
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
    color: ${({ backgroundColor }) => backgroundColor};
    background-color: ${({ linkColorHover }) => linkColorHover};
    border-color: ${({ linkColorHover }) => linkColorHover};
  }
`

export const Button: FC<ButtonProps> = memo(({ onClick, children }) => {
  const [state] = useReducer(themeReducer, initialThemeState)
  const { link, linkHover, background } = state.theme
  return (
    <StyledButton
      onClick={onClick}
      linkColor={link}
      linkColorHover={linkHover}
      backgroundColor={background}
    >
      {children}
    </StyledButton>
  )
})
