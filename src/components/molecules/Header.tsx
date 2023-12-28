import styled from 'styled-components';

import { fullName, subheadline, headline } from 'constants/resume';
import { LAYOUT_DEFAULTS } from 'styles/layout';
import { Animated } from 'components/molecules/Animated';
import { Heading } from 'components/atoms/Typography/Heading';
import { Text } from 'components/atoms/Typography/Text';
import { Row, Col } from 'components/atoms/Grid';
import { Hr } from 'components/atoms/Hr';
import { Contact } from 'components/organisms/Contact';

const { spacing, mediaQueries } = LAYOUT_DEFAULTS;

const StyledHeader = styled.header`
  margin: 0 0 ${spacing.large} 0;
  padding: 0 ${spacing.small};
  @media ${mediaQueries.desktop} {
    margin: ${spacing.large} 0 0 0;
    padding: ${spacing.large};
    padding-top: 0;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Row $columnsDesktop={6}>
        <Col $rangeDesktop={4}>
          <Animated $delay={0}>
            <Heading $level={1}>{fullName}</Heading>
          </Animated>
          <Animated $delay={100}>
            <Hr $accent />
          </Animated>
        </Col>
      </Row>
      <Row $columnsDesktop={6}>
        <Col $rangeDesktop="4..">
          <Animated $delay={200}>
            <Heading $accent $level={2}>
              {headline}
            </Heading>
          </Animated>
          <Animated $delay={300}>
            <Text $inline>{subheadline}</Text>
          </Animated>
          <Animated $delay={400}>
            <Contact />
          </Animated>
        </Col>
      </Row>
    </StyledHeader>
  );
};
