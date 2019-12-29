import { SFC, memo } from 'react'
import { fixWidow } from 'utils/stringFormat'
import { resume } from 'constants/resume'
import { Animated } from 'components/Animated'
import { Heading, Text } from 'components/Typography'
import { Button } from 'components/Buttons'
import { Row, Col } from 'components/Grid'
import { Hr } from 'components/Hr'
import { Section } from 'components/Section'

const HeaderContent: SFC<{}> = memo(() => {
  const {
    profile: { fullName, description, metaDescription }
  } = resume
  return (
    <Row columnsDesktop={5}>
      <Col row>
        <Animated delay={100}>
          <Text accent>Hello! My name is</Text>
        </Animated>
        <Animated delay={200}>
          <Heading level={1}>
            {fullName}
        </Heading>
        </Animated>
        <Animated delay={300}>
          <Hr accent />
        </Animated>
      </Col>
      <Col rangeDesktop='3..'>
        <Animated delay={400}>
          <Heading accent level={2}>{description}</Heading>
        </Animated>
      {/* </Col>
      <Col> */}
        <Animated delay={500}>
          <Text transparent>{fixWidow(metaDescription)}</Text>
        </Animated>
        <Animated delay={600}>
          <Text>
            <Button href='mailto:derekmisler@gmail.com?subject=Hello!'>
              Say Hello!
            </Button>
          </Text>
        </Animated>
      </Col>
    </Row>
  )
})

export const Header: SFC<{}> = memo(() => (
  <Section id='start' as='header' Component={HeaderContent} />
))
