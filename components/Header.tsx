import React from 'react'
import styled from 'styled-components'
import { fixWidow } from '../utils/stringFormat'
import { H1 } from './StyledText'
import { navHeight } from '../styles/variables'
import { transparentWhite, blue, orange } from '../styles/colors'

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
const Overlay = styled.div`
  background-image: linear-gradient(45deg, ${blue}, ${orange});
  opacity: 0.75;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`
const DownArrow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: ${transparentWhite};
  z-index: 3;
`

interface HeaderTypes {
  heading?: string
  subheading?: string
}

const Hero: React.FC<HeaderTypes> = ({ heading, subheading }) => (
  <Header>
    <Container>
      <H1>
        {heading}
        {subheading && (
          <>
            <br />
            <SubHeading>{fixWidow(subheading)}</SubHeading>
          </>
        )}
      </H1>
    </Container>
    <DownArrow />
    <Overlay />
  </Header>
)

export default Hero
