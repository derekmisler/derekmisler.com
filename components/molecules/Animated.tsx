import React, { useState, useEffect, SFC, memo } from 'react'
import styled, { css } from 'styled-components'
import { StyledComponentProps, LAYOUT_DEFAULTS } from 'styles'

const { transition } = LAYOUT_DEFAULTS

interface StyledAnimatedProps extends StyledComponentProps {
  animated?: boolean
}

interface AnimatedProps extends StyledAnimatedProps {
  active?: boolean
  delay?: number
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
  ${props => props.animated && animationEndCss}
`

export const Animated: SFC<AnimatedProps> = memo(
  ({ active = true, delay = 0, ...rest }) => {
    const [animated, setAnimated] = useState(false)
    useEffect(() => {
      setTimeout(() => {
        setAnimated(active)
      }, delay)
    }, [active])

    return <StyledAnimated {...rest} animated={animated} />
  }
)
