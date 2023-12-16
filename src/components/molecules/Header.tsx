import { fixWidow } from '@/utils/stringFormat'
import { resume } from '@/constants/resume'
import { Animated } from 'molecules/Animated'
import { Heading, Text } from '@/atoms/Typography'
import { Button } from '@/atoms/Buttons'
import { Row, Col } from '@/atoms/Grid'
import { Hr } from '@/atoms/Hr'
import { Section } from 'molecules/Section'

const HeaderContent = () => {
  const {
    profile: { fullName, description, metaDescription }
  } = resume
  return (
    <>
      <Row columnsDesktop={6}>
        <Col rangeDesktop={4}>
          <Animated delay={100}>
            <Text inline accent>
              Hello! My name is
            </Text>
          </Animated>
          <Animated delay={200}>
            <Heading level={1}>{fullName}</Heading>
          </Animated>
          <Animated delay={300}>
            <Hr accent />
          </Animated>
        </Col>
      </Row>
      <Row columnsDesktop={6}>
        <Col rangeDesktop='4..'>
          <Animated delay={400}>
            <Heading accent level={2}>
              {description}
            </Heading>
          </Animated>
          <Animated delay={500}>
            <Text inline>{fixWidow(metaDescription)}</Text>
          </Animated>
          <Animated delay={600}>
            <Text>
              <Button href='mailto:derekmisler@gmail.com?subject=Hello!'>Say Hello!</Button>
              <Button download href='derek-misler-resume.pdf'>
                Download a PDF!
              </Button>
            </Text>
          </Animated>
        </Col>
      </Row>
    </>
  )
}

export const Header = () => <Section id='start' as='header' Component={HeaderContent} />
