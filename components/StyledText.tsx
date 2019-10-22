import React from 'react'
import styled from 'styled-components'
import { fontSizeLarge, serif } from '../styles/typography'
import { white } from '../styles/colors'
import { navHeight } from '../styles/variables'

const StyledH1 = styled.h1`
  font-size: ${fontSizeLarge}px;
  font-family: ${serif};
  color: ${white};
  margin: 0;
  line-height: 2;
  display: inline-block;
  padding-bottom: ${navHeight}px;
`

export const H1: React.FC<{}> = ({ children }) => (
  <StyledH1>{children}</StyledH1>
)
