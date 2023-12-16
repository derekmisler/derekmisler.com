import { HTMLProps } from 'react'
import styled from 'styled-components'
import { LAYOUT_DEFAULTS } from '@/styles'
import { Plus } from '@/atoms/Icons'

const { spacing, mediaQueries } = LAYOUT_DEFAULTS

interface ActionProps extends HTMLProps<HTMLButtonElement> {
  active?: boolean
}

interface StyledActionProps extends ActionProps {}

const StyledAction = styled.button<StyledActionProps>`
  position: absolute;
  bottom: ${spacing.medium};
  right: ${spacing.medium};
  display: flex;
  align-items: center;
  justify-items: center;
  color: ${({ theme }) => theme.background};
  background-color: ${({ theme }) => theme.link};
  padding: ${spacing.medium};
  border-radius: 50%;
  border: 0;
  > svg * {
    fill: ${({ active, theme }) => (active ? theme.accent : theme.background)};
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.linkHover};
  }
  @media ${mediaQueries.desktop} {
    bottom: auto;
    right: ${spacing.medium};
    top: ${spacing.medium};
  }
`

export const Action = ({ onClick, active = false }: ActionProps) => {
  return (
    <StyledAction onClick={onClick} active={active}>
      <Plus />
    </StyledAction>
  )
}
