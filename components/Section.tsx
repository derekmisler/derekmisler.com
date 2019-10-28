import React from 'react'
import { Heading } from 'components/Typography'
import { RouteTypes } from 'constants/routes'

interface SectionTypes {
  subheading?: string
  section: RouteTypes
}

const Section: React.FC<SectionTypes> = ({ children, subheading, section }) => (
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
