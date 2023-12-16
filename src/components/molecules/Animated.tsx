'use client'

import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { StyledComponentProps, LAYOUT_DEFAULTS } from '@/styles/layout'

const { transition } = LAYOUT_DEFAULTS

interface StyledAnimatedProps extends StyledComponentProps {
  $animated?: boolean
}

interface AnimatedProps extends StyledAnimatedProps {
  $active?: boolean
  $delay?: number
}

const animationEndCss = css`
  opacity: 1;
  transform: translateY(0);
`

const StyledAnimated = styled.div<StyledAnimatedProps>`
  opacity: 0;
  transform: translateY(1rem);
  transition: ${transition};
  will-change: transform;
  ${props => props.$animated && animationEndCss}
`

export const Animated = ({ $active = true, $delay = 0, ...rest }: AnimatedProps) => {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setAnimated($active)
    }, $delay)
  }, [$active]) // eslint-disable-line react-hooks/exhaustive-deps

  return <StyledAnimated {...rest} $animated={animated} />
}
