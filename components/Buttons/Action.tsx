import styled from 'styled-components'
import { HTMLProps, useReducer, memo, FC } from 'react'
import { themeReducer, initialThemeState } from 'utils/reducers'
import { LAYOUT_DEFAULTS } from 'styles'
import { Plus } from 'components/Icons'

const {
  spacing
} = LAYOUT_DEFAULTS

interface ActionProps extends HTMLProps<HTMLButtonElement> { }

interface StyledActionProps {
  linkColor: string
  linkColorHover: string
  backgroundColor: string
}

const StyledAction = styled.button<StyledActionProps>`
  position: fixed;
  bottom: ${spacing.medium};
  right: ${spacing.medium};
  display: flex;
  align-items: center;
  justify-items: center;
  color: ${({ backgroundColor }) => backgroundColor};
  background-color: ${({ linkColor }) => linkColor};
  padding: ${spacing.medium};
  border-radius: 50%;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    background-color: ${({ linkColorHover }) => linkColorHover};
  }
`

export const Action: FC<ActionProps> = memo(({ onClick }) => {
  const [state] = useReducer(themeReducer, initialThemeState)
  const { link, linkHover, background } = state.theme

  return (
    <StyledAction
      onClick={onClick}
      linkColor={link}
      linkColorHover={linkHover}
      backgroundColor={background}
    >
      <Plus />
    </StyledAction>
  )
})
