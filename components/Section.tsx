import React from 'react'
import { Heading } from 'components/Typography'
import { SectionTypes } from 'constants/sections'

interface SectionProps {
  subheading?: string
  section: SectionTypes
}

const Section: React.FC<SectionProps> = ({ children, subheading, section }) => (
  <section id={section.location}>
    <Heading level={2}>
      {section.label}
      {subheading && (
        <>
          <br />
          <small>{subheading}</small>
        </>
      )}
    </Heading>
    {children && children}
  </section>
)

export default Section
