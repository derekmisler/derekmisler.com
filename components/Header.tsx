import React from 'react'
import { fixWidow } from 'utils/stringFormat'
import { Heading, Text, Link, SubHeading } from './Typography'
import { SmMdLgWidths } from 'types/layout'
import { Container } from './Container'
import { resume } from 'constants/resume'
import { Card } from 'components/Card'

export const Header: React.FC<{}> = () => {
  const {
    profile: { fullName, description, metaDescription }
  } = resume
  return (
    <Container as='header' width={SmMdLgWidths.Small} fullHeight>
      <Card delay={100}>
        <Text accent>Hello! My name is</Text>
      </Card>
      <Heading level={1}>
        <Card as='span' delay={200}>
          {fullName}
          <br />
        </Card>
        <Card as='span' delay={300}>
          <SubHeading as='small'>{fixWidow(description)}</SubHeading>
        </Card>
      </Heading>
      <Card delay={400}>
        <Text transparent>{fixWidow(metaDescription)}</Text>
      </Card>
      <Card delay={500}>
        <Text>
          <Link href='mailto:derekmisler@gmail.com?subject=Hello!'>
            Say Hello!
          </Link>
        </Text>
      </Card>
    </Container>
  )
}
