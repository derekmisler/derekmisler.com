import React from 'react'
import styled from 'styled-components'
import { fixWidow } from 'utils/stringFormat'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { Heading, Small, Text, Link } from './Typography'
import { SmMdLgWidths } from 'types/layout'
import { Container } from './Container'
import { resume } from 'constants/resume'

const SubHeading = styled(Small)`
  border-top: 1px solid ${LAYOUT_DEFAULTS.borderColor};
  display: inline-block;
  padding-top: ${LAYOUT_DEFAULTS.navHeight}px;
  margin-top: ${LAYOUT_DEFAULTS.navHeight}px;
`

export const Header: React.FC<{}> = () => {
  const {
    profile: { fullName, description, metaDescription }
  } = resume
  return (
    <Container as='header' width={SmMdLgWidths.Small} fullHeight>
      <Text accent>Hello! My name is</Text>
      <Heading level={1}>
        {fullName}
        <br />
        <SubHeading as='small' transparent>
          {fixWidow(description)}
        </SubHeading>
      </Heading>
      <Text transparent>{fixWidow(metaDescription)}</Text>
      <Link href='mailto:derekmisler@gmail.com?subject=Hello!'>Say Hello!</Link>
    </Container>
  )
}
