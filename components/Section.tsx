import React from 'react'
import { Heading, Small } from './Typography'
import { SmMdLgWidths } from 'types/layout'
import { Container } from './Container'

interface SectionProps {
  id: string
  heading: string
  count?: string
  Component: React.FC
  width?: SmMdLgWidths
}

export const Section: React.FC<SectionProps> = ({
  count,
  id,
  heading,
  Component,
  width = SmMdLgWidths.Medium
}) => (
  <Container as='section' id={id} width={width}>
    <Heading level={2}>
      {count && <Small>{count} </Small>}
      {heading}
    </Heading>
    <Component />
  </Container>
)
