import React from 'react'
import styled from 'styled-components'
import { serif } from '../styles/typography'
import { white } from '../styles/colors'
import { navHeight } from '../styles/variables'

const StyledH1 = styled.h1`
  font-size: 12vw;
  font-family: ${serif};
  line-height: 2;
  color: ${white};
  margin: 0;
  display: inline-block;
  padding-bottom: ${navHeight}px;
`

export const H1: React.FC<{}> = ({ children }) => (
  <StyledH1>{children}</StyledH1>
)
