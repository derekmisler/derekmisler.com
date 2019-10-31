import React from 'react'
import { fixWidow } from 'utils/stringFormat'
import { Heading, Text, Link, SubHeading } from './Typography'
import { SmMdLgWidths } from 'types/layout'
import { Container } from './Container'
import { resume } from 'constants/resume'

export const Header: React.FC<{}> = () => {
  const {
    profile: { fullName, description, metaDescription }
  } = resume
  return (
    <Container as='header' width={SmMdLgWidths.Small} fullHeight>
      <Text accent>Hello! My name is</Text>
      <Heading level={1}>
        {fullName}
        <br />
        <SubHeading as='small'>{fixWidow(description)}</SubHeading>
      </Heading>
      <Text transparent>{fixWidow(metaDescription)}</Text>
      <Link href='mailto:derekmisler@gmail.com?subject=Hello!'>Say Hello!</Link>
    </Container>
  )
}
