import React from 'react'
import styled from 'styled-components'
import { fixWidow } from 'utils/stringFormat'
import { navHeight, transparentWhite } from 'styles'
import { Heading } from './Typography'

const Header = styled.header`
  height: 100vh;
`
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 4;
  position: relative;
  padding: ${navHeight}px ${Math.floor(navHeight * 2)}px;
  max-width: 75vw;
`
const SubHeading = styled.small`
  border-top: 1px solid ${transparentWhite};
  line-height: 1;
  display: inline-block;
  padding-top: ${navHeight}px;
  font-size: 75%;
`

interface HeaderTypes {
  heading?: string
  subheading?: string
}

const Hero: React.FC<HeaderTypes> = ({ heading, subheading }) => (
  <Header>
    <Container>
      <Heading level={1}>
        {heading}
        {subheading && (
          <>
            <br />
            <SubHeading>{fixWidow(subheading)}</SubHeading>
          </>
        )}
      </Heading>
    </Container>
  </Header>
)

export default Hero
