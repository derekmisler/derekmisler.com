import React, { ComponentType } from 'react'
import styled from 'styled-components'
import { StyledComponentProps, LAYOUT_DEFAULTS } from '@/styles'
import { Row, Col } from '@/atoms/Grid'
import { Hr } from '@/atoms/Hr'
import { Heading } from '@/atoms/Typography'

const { spacing, mediaQueries } = LAYOUT_DEFAULTS

interface SectionProps extends StyledComponentProps {
  id: string
  heading?: string
  Component: ComponentType
}

const StyledSection = styled.section.attrs<StyledComponentProps>(({ as }) => ({ as }))`
  margin: 0 0 ${spacing.large} 0;
  padding: 0 ${spacing.small};
  @media ${mediaQueries.desktop} {
    margin: ${spacing.large} 0 0 0;
    padding: ${spacing.large};
    padding-top: 0;
  }
`

export const Section = ({ id, heading, Component, as }: SectionProps) => (
  <StyledSection as={as} id={id}>
    {heading && (
      <>
        <Row columnsDesktop={5} gap='large'>
          <Col rangeDesktop={3}>
            <Heading level={2}>{heading}</Heading>
            <Hr accent />
          </Col>
        </Row>
      </>
    )}
    <Component />
  </StyledSection>
)
