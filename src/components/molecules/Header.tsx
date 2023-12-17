import { fixWidow } from '@/utils/fixWidow';
import { profile } from '@/constants/resume';
import { Animated } from '@/molecules/Animated';
import { Heading } from '@/atoms/Typography/Heading';
import { Text } from '@/atoms/Typography/Text';
import { Row, Col } from '@/atoms/Grid';
import { Hr } from '@/atoms/Hr';
import { Section } from '@/molecules/Section';
import { Contact } from '@/organisms/Contact';

const HeaderContent = () => {
  const { fullName, description, metaDescription } = profile;
  return (
    <>
      <Row $columnsDesktop={6}>
        <Col $rangeDesktop={4}>
          <Animated $delay={100}>
            <Text $inline $accent>
              Hello! My name is
            </Text>
          </Animated>
          <Animated $delay={200}>
            <Heading $level={1}>{fullName}</Heading>
          </Animated>
          <Animated $delay={300}>
            <Hr $accent />
          </Animated>
        </Col>
      </Row>
      <Row $columnsDesktop={6}>
        <Col $rangeDesktop="4..">
          <Animated $delay={400}>
            <Heading $accent $level={2}>
              {description}
            </Heading>
          </Animated>
          <Animated $delay={500}>
            <Text $inline>{fixWidow(metaDescription)}</Text>
          </Animated>
          <Animated $delay={600}>
            <Contact />
          </Animated>
        </Col>
      </Row>
    </>
  );
};

export const Header = () => (
  <Section as="header"><HeaderContent /></Section>
);
