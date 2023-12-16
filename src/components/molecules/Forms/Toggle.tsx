'use client'

import { useState, useEffect, HTMLProps } from 'react'
import styled from 'styled-components'
import { Small } from '@/atoms/Typography'
import { LAYOUT_DEFAULTS, TRANSITION_DEFAULTS } from '@/styles/layout'
import { DEFAULT_TEXT_STYLES } from '@/styles/typography'

const { borderSize, borderSizeSmall, borderSizeLarge, borderStyle, borderRadius, spacing } =
  LAYOUT_DEFAULTS

const { timing, duration } = TRANSITION_DEFAULTS

interface ToggleProps extends HTMLProps<HTMLInputElement> {
  onLabel?: string
  offLabel?: string
  onToggle: Function
  defaultChecked?: boolean
}

const ToggleWrapper = styled.button`
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
  outline: none;
  color: ${({ theme }) => theme.text};
  &:hover {
    cursor: pointer;
  }
`

const ToggleSlider = styled.div<{ isActive?: boolean }>`
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
    left: ${({ isActive }) => (isActive ? borderSize : 0)};
    will-change: left;
    top: 0;
  }
`

export const Toggle = ({ onLabel, offLabel, onToggle, defaultChecked }: ToggleProps) => {
  const [active, setActive] = useState(defaultChecked)
  const handleChange = () => {
    setActive(!active)
  }
  useEffect(() => {
    setActive(defaultChecked)
  }, [defaultChecked])

  useEffect(() => {
    onToggle(active)
  }, [active]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ToggleWrapper onClick={handleChange}>
      {offLabel && <Small>{offLabel}</Small>}
      <ToggleSlider isActive={active} />
      {onLabel && <Small>{onLabel}</Small>}
    </ToggleWrapper>
  )
}
