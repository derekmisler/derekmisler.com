import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledComponentProps, LAYOUT_DEFAULTS } from 'styles/layout';
import { Row, Col } from 'components/atoms/Grid';
import { Hr } from 'components/atoms/Hr';
import { Heading } from 'components/atoms/Typography/Heading';

const { spacing, mediaQueries } = LAYOUT_DEFAULTS;

interface SectionProps extends StyledComponentProps {
  heading?: string;
  children: ReactNode;
}

const StyledSection = styled.section.attrs<StyledComponentProps>(({ as }) => ({
  as,
}))`
  margin: 0 0 ${spacing.large} 0;
  padding: 0 ${spacing.small};
  @media ${mediaQueries.desktop} {
    margin: ${spacing.large} 0 0 0;
    padding: ${spacing.large};
    padding-top: 0;
  }
`;

export const Section = ({ heading, as, children }: SectionProps) => (
  <StyledSection as={as}>
    {heading && (
      <Row $columnsDesktop={5} $gap="large">
        <Col $rangeDesktop={3}>
          <Heading $level={2}>{heading}</Heading>
          <Hr $accent />
        </Col>
      </Row>
    )}
    {children}
  </StyledSection>
);
