import React from 'react'
import { Heading, Small } from './Typography'
import { ContainerWidths } from 'types/layout'
import { Container } from './Container'

interface SectionProps {
  id: string
  heading: string
  count?: string
  Component: React.FC
}

const Section: React.FC<SectionProps> = ({ count, id, heading, Component }) => (
  <Container as='section' id={id} width={ContainerWidths.Medium}>
    <Heading level={2}>
      {count && <Small>{count} </Small>}
      {heading}
    </Heading>
    <Component />
  </Container>
)

export default Section
