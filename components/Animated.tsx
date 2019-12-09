import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { AnimatedProps, StyledAnimatedProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { transition } = LAYOUT_DEFAULTS

const animationEndCss = css`
  opacity: 1;
  transform: translateY(0);
`

const StyledAnimated = styled.div<StyledAnimatedProps>`
  opacity: 0;
  transform: translateY(1rem);
  transition: ${transition};
  ${props => props.animated && animationEndCss}
`

export const Animated: React.FC<AnimatedProps> = ({
  active = true,
  delay = 0,
  ...rest
}) => {
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setAnimated(active)
    }, delay)
  }, [active])

  return <StyledAnimated {...rest} animated={animated} />
}
