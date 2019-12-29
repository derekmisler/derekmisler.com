import React, { SFC, memo } from 'react'
import styled from 'styled-components'
import { StyledComponentProps, LAYOUT_DEFAULTS } from 'styles'
import { Heading } from './Typography'

const { spacing } = LAYOUT_DEFAULTS

interface SectionTypes extends StyledComponentProps {
  id: string
  heading?: string
  Component: SFC
}

const StyledSection = styled.section.attrs<StyledComponentProps>(({ as }) => ({
  as
}))`
  margin: 0;
  padding: 0 ${spacing.large};
`
export const Section: SFC<SectionTypes> = memo(
  ({ id, heading, Component, as }) => (
    <StyledSection as={as} id={id}>
      { heading && <Heading level={2}>{heading}</Heading> }
      <Component />
    </StyledSection>
  )
)
