import { fullName, subheadline, headline } from 'constants/resume';
import { Animated } from 'components/molecules/Animated';
import { Heading } from '../atoms/Typography/Heading';
import { Text } from '../atoms/Typography/Text';
import { Row, Col } from 'components/atoms/Grid';
import { Hr } from 'components/atoms/Hr';
import { Section } from 'components/molecules/Section';
import { Contact } from 'components/organisms/Contact';

const HeaderContent = () => {
  return (
    <>
      <Row $columnsDesktop={6}>
        <Col $rangeDesktop={4}>
          <Animated $delay={0}>
            <Text $inline $accent>
              Hello! My name is
            </Text>
          </Animated>
          <Animated $delay={100}>
            <Heading $level={1}>{fullName}</Heading>
          </Animated>
          <Animated $delay={200}>
            <Hr $accent />
          </Animated>
        </Col>
      </Row>
      <Row $columnsDesktop={6}>
        <Col $rangeDesktop="4..">
          <Animated $delay={300}>
            <Heading $accent $level={2}>
              {headline}
            </Heading>
          </Animated>
          <Animated $delay={400}>
            <Text $inline>{subheadline}</Text>
          </Animated>
          <Animated $delay={500}>
            <Contact />
          </Animated>
        </Col>
      </Row>
    </>
  );
};

export const Header = () => (
  <Section as="header">
    <HeaderContent />
  </Section>
);
