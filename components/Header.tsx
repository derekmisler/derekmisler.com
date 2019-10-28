import React from 'react'
import styled from 'styled-components'
import { fixWidow } from 'utils/stringFormat'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { Heading, Small, Text } from './Typography'
import { Container } from './Container'
import { resume } from 'constants/resume'

const SubHeading = styled(Small)`
  border-top: 1px solid ${LAYOUT_DEFAULTS.borderColor};
  display: inline-block;
  padding-top: ${LAYOUT_DEFAULTS.navHeight}px;
  margin-top: ${LAYOUT_DEFAULTS.navHeight}px;
`

const Hero: React.FC<{}> = () => {
  const {
    profile: { fullName, description, metaDescription }
  } = resume
  return (
    <Container as='header' level={3} fullHeight>
      <Text accent>Hello, my name is</Text>
      <Heading level={1}>
        {fullName}
        <br />
        <SubHeading as='small' transparent>
          {fixWidow(description)}
        </SubHeading>
      </Heading>
      <Text transparent>{fixWidow(metaDescription)}</Text>
    </Container>
  )
}

export default Hero
