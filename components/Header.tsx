import { FC, memo } from 'react'
import { fixWidow } from 'utils/stringFormat'
import { resume } from 'constants/resume'
import { Animated } from 'components/Animated'
import { Heading, Text, Link, SubHeading } from 'components/Typography'
import { Row, Col } from 'components/Grid'

export const Header: FC<{}> = memo(() => {
  const {
    profile: { firstName, lastName, description, metaDescription }
  } = resume
  return (
    <Row as='header'>
      <Col row>
        <Animated delay={100}>
          <Text accent>Hello! My name is</Text>
        </Animated>
        <Heading level={1}>
          <Animated delay={200}>
            {firstName}
            <br />
            {lastName}
            <br />
          </Animated>
          <Animated delay={300}>
            <SubHeading>{fixWidow(description)}</SubHeading>
          </Animated>
        </Heading>
        <Animated delay={400}>
          <Text transparent>{fixWidow(metaDescription)}</Text>
        </Animated>
        <Animated delay={500}>
          <Text>
            <Link href='mailto:derekmisler@gmail.com?subject=Hello!'>
              Say Hello!
            </Link>
          </Text>
        </Animated>
      </Col>
    </Row>
  )
})
