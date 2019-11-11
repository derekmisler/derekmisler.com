import React from 'react'
import { Heading } from './Typography'
import { SmMdLgWidths } from 'types/layout'
import { Container } from './Container'

interface SectionProps {
  id: string
  heading: string
  Component: React.FC
  width?: SmMdLgWidths
}

export const Section: React.FC<SectionProps> = ({
  id,
  heading,
  Component,
  width = SmMdLgWidths.Medium
}) => (
  <Container as='section' id={id} width={width}>
    <Heading level={2}>{heading}</Heading>
    <Component />
  </Container>
)
