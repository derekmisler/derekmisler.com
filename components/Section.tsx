import React from 'react'
import { Heading } from './Typography'

interface SectionProps {
  id: string
  heading: string
  Component: React.FC
}

export const Section: React.FC<SectionProps> = ({ id, heading, Component }) => (
  <section id={id}>
    <Heading level={2}>{heading}</Heading>
    <Component />
  </section>
)
