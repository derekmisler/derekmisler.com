import { HTMLProps, memo, FC } from 'react'
import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'
import { Plus } from 'components/Icons'
import { useTheme } from 'utils/useTheme'

const {
  spacing,
  mediaQueries
} = LAYOUT_DEFAULTS

interface ActionProps extends HTMLProps<HTMLButtonElement> {
  active: boolean
}

interface StyledActionProps {
  linkColor: string
  linkColorHover: string
  backgroundColor: string
  fillColor: string
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
  > svg * {
    fill: ${({ fillColor }) => fillColor}
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    background-color: ${({ linkColorHover }) => linkColorHover};
  }
  @media ${mediaQueries.desktop} {
    bottom: auto;
    right: ${spacing.medium};
    top: ${spacing.medium};
  }
`

export const Action: FC<ActionProps> = memo(({ onClick, active }) => {
  const [{ link, linkHover, background, accent }] = useTheme()
  return (
    <StyledAction
      onClick={onClick}
      linkColor={link}
      linkColorHover={linkHover}
      backgroundColor={background}
      fillColor={active ? accent : background}
    >
      <Plus />
    </StyledAction>
  )
})
