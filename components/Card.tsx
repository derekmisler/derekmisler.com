import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { CardProps, StyledCardProps } from 'types/layout'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { generateGrid } from 'utils/layout'

const { spacing } = LAYOUT_DEFAULTS

const animationStartCss = css`
  opacity: 0;
  transform: translateY(1rem);
  transition: 500ms all ease-in-out;
`
const animationEndCss = css`
  opacity: 1;
  transform: translateY(0);
`

const StyledCard = styled.div<StyledCardProps>`
  display: grid;
  justify-content: ${({ align = 'stretch' }) => align};
  grid-template-columns: ${({ columns = 1 }) => generateGrid(columns)};
  grid-column-gap: ${({ gap }) => (gap ? spacing[gap] : 0)};
  padding: ${({ padding }) => (padding ? spacing[padding] : 0)};
  margin-bottom: ${({ margin }) => (margin ? spacing[margin] : 0)};
  ${props => props.animation && animationStartCss}
  ${props => props.animated && animationEndCss}
`

export const Card: React.FC<CardProps> = ({
  delay = 0,
  animation = false,
  ...rest
}) => {
  const animateComponent: boolean = animation || delay > 0
  const [animated, setAnimated] = useState(!animateComponent)
  useEffect(() => {
    if (animateComponent) {
      setTimeout(() => {
        setAnimated(true)
      }, delay)
    }
  }, [])

  return (
    <StyledCard {...rest} animated={animated} animation={animateComponent} />
  )
}
