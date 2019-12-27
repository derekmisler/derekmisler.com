import { SFC, memo } from 'react'
import { fixWidow } from 'utils/stringFormat'
import { resume } from 'constants/resume'
import { Animated } from 'components/Animated'
import { Heading, Text, Link } from 'components/Typography'
import { Row, Col } from 'components/Grid'
import { Hr } from 'components/Hr'

export const Header: SFC<{}> = memo(() => {
  const {
    profile: { fullName, description, metaDescription }
  } = resume
  return (
    <Row as='header' columnsDesktop={2}>
      <Col row>
        <Animated delay={100}>
          <Text accent>Hello! My name is</Text>
        </Animated>
        <Heading level={1}>
          <Animated delay={200}>
            {fullName}
          </Animated>
        </Heading>
        <Animated delay={300}>
          <Hr accent />
          <Heading accent level={2}>{description}</Heading>
        </Animated>
      </Col>
      <Col>
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
