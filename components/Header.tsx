import React from 'react'
import styled from 'styled-components'
import { fixWidow } from 'utils/stringFormat'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { Heading, Small, Text } from './Typography'
import { resume } from 'constants/resume'

const Header = styled.header`
  height: 100vh;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction: column;
  z-index: 4;
  position: relative;
  max-width: 66vw;
`
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
    <Header>
      <Heading level={1}>
        {fullName}
        <br />
        <SubHeading>{fixWidow(description)}</SubHeading>
      </Heading>
      <Text>{fixWidow(metaDescription)}</Text>
    </Header>
  )
}

export default Hero
