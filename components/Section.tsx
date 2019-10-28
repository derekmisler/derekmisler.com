import React from 'react'
import { Heading, Small } from './Typography'

interface SectionProps {
  id: string
  heading: string
  count?: string
  Component: React.FC
}

const Section: React.FC<SectionProps> = ({ count, id, heading, Component }) => (
  <section id={id}>
    <Heading level={2}>
      {count && <Small>{count} </Small>}
      {heading}
    </Heading>
    <Component />
  </section>
)

export default Section
