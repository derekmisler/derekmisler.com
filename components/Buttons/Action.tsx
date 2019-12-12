import { HTMLProps, FC, memo, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { LAYOUT_DEFAULTS } from 'styles'
import { Plus } from 'components/Icons'

const {
  spacing,
  mediaQueries
} = LAYOUT_DEFAULTS

type ActionProps = {
  active?: boolean
} & HTMLProps<HTMLButtonElement>

interface StyledActionProps {
  linkColor: string
  linkColorHover: string
  backgroundColor: string
  fillColor: string
}

const StyledAction = styled.button<StyledActionProps>`
  position: absolute;
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

export const Action: FC<ActionProps> = memo(({ onClick, active = false }) => {
  const { link, linkHover, background, accent } = useContext(ThemeContext)
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
