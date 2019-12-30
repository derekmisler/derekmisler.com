import { HTMLProps, memo, SFC, useState } from 'react'
import styled from 'styled-components'
import { Small } from 'components/Typography'
import { DEFAULT_TEXT_STYLES, LAYOUT_DEFAULTS, transitionDefaults } from 'styles'

const {
  borderSize,
  borderSizeSmall,
  borderSizeLarge,
  borderStyle,
  borderRadius,
  spacing
} = LAYOUT_DEFAULTS

const { timing, duration } = transitionDefaults

interface ToggleProps extends HTMLProps<HTMLInputElement> {
  onLabel?: string
  offLabel?: string
  onToggle: Function
}

const ToggleWrapper = styled.div`
  ${DEFAULT_TEXT_STYLES}
  border: 0;
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${spacing.small} ${spacing.medium};
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.transparentBackground};
`

const Checkbox = styled.input`
  height: ${borderSize};
  width: ${borderSizeLarge};
  border-radius: ${borderRadius};
  padding: 0;
  margin: 0 ${spacing.small};
  position: relative;
  appearance: none;
  outline: none;
  background-color: transparent;
  overflow: hidden;
  border: ${({ theme }) => `${borderSizeSmall} ${borderStyle} ${theme.link}`};

  &::before {
    content: '';
    position: absolute;
    height: ${borderSize};
    width: calc(${borderSize} + ${borderSizeSmall});
    border-radius: ${borderRadius};
    background-color: ${({ theme }) => theme.link};
    transition: ${timing} left ${duration};
    left: -${borderSizeSmall};
    will-change: left;
    top: -${borderSizeSmall};
  }

  &:checked {
    background-image: none;

    &::before {
      left: calc(100% - ${borderSize});
    }
  }
`

export const Toggle: SFC<ToggleProps> = memo(({
  onLabel,
  offLabel,
  onToggle
}) => {
  const [isActive, setActive] = useState(false)
  const handleChange = () => {
    setActive(!isActive)
    onToggle(isActive)
  }
  return (
    <ToggleWrapper>
      { onLabel && <Small htmlFor='toggle' as='label'>{onLabel}</Small> }
      <Checkbox id='toggle' onChange={handleChange} type='checkbox' />
      {offLabel && <Small htmlFor='toggle' as='label'>{offLabel}</Small> }
    </ToggleWrapper>
  )
})
