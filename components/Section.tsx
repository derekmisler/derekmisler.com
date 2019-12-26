import React, { SFC, memo } from 'react'
import styled from 'styled-components'
import { SmMdLgSizes, LAYOUT_DEFAULTS } from 'styles'
import { Heading } from './Typography'

const { widths } = LAYOUT_DEFAULTS

interface SectionTypes {
  id: string
  heading: string
  Component: SFC
  width: SmMdLgSizes
}

const StyledSectionOuter = styled.section`
  margin: 0;
  padding: 0;
  width: auto;
`
const StyledSectionInner = styled.div<{ width: SmMdLgSizes }>`
  margin: 0 auto;
  width: ${({ width }) => widths[width]};
`

export const Section: SFC<SectionTypes> = memo(
  ({ id, heading, Component, width }) => (
    <StyledSectionOuter id={id}>
      <StyledSectionInner width={width}>
        <Heading level={2}>{heading}</Heading>
        <Component />
      </StyledSectionInner>
    </StyledSectionOuter>
  )
)
