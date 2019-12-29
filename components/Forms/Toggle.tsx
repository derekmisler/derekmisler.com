import { HTMLProps, memo, SFC, useState } from 'react'
import styled from 'styled-components'
import { Small } from 'components/Typography'
import { DEFAULT_TEXT_STYLES, LAYOUT_DEFAULTS, transitionDefaults } from 'styles'

const { borderStyle, borderSize, borderSizeSmall } = LAYOUT_DEFAULTS
const { duration, timing } = transitionDefaults

interface ToggleProps extends HTMLProps<HTMLInputElement> {
  onLabel?: string
  offLabel?: string
  onToggle: Function
}

const ToggleWrapper = styled.fieldset`
  ${DEFAULT_TEXT_STYLES}
  border: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledCheckBox = styled.input`
  height: 0;
  width: ${borderSize};
  position: relative;
  border: ${({ theme }) => `${borderSizeSmall} ${borderStyle} ${theme.link}`};
  appearance: none;
  outline: none;

  &::before {
    transition: ${duration} left ${timing};
    background-color: transparent;
    border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
    color: ${({ theme }) => theme.link};
    content: '';
    display: inline-block;
    height: ${borderSize};
    left: -${borderSize};
    position: absolute;
    width: ${borderSize};
  }

  &:checked {
    background-image: none;

    &::before {
      left: ${borderSize};
    }
  }

`

export const Toggle: SFC<ToggleProps> = memo(({
  onLabel = 'On',
  offLabel = 'Off',
  onToggle
}) => {
  const [isActive, setActive] = useState(false)
  const handleChange = () => {
    setActive(!isActive)
    onToggle(isActive)
  }
  return (
    <ToggleWrapper>
      <Small as='label'>{onLabel}</Small>
      <StyledCheckBox onChange={handleChange} type='checkbox' />
      <Small as='label'>{offLabel}</Small>
    </ToggleWrapper>
  )
})
