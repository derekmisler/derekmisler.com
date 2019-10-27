import React from 'react'
import { Heading } from './Typography'

interface SectionTypes {
  heading?: string
  subheading?: string
}

const Section: React.FC<SectionTypes> = ({ children, heading, subheading }) => (
  <section>
    <Heading level={2}>
      {heading}
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
