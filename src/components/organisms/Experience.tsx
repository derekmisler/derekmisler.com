import styled from 'styled-components';
import { type Experience as ExperienceType } from 'constants/resume';
import { Text, Heading, Link } from 'components/atoms/Typography';
import { Row, Col } from 'components/atoms/Grid';
import { Ul, Li } from 'components/atoms/Lists';
import { Hr } from '../atoms/Hr';
import { LAYOUT_DEFAULTS } from 'styles/layout';
import { careers, education } from 'constants/resume';

const { borderSize, borderStyle, spacing, mediaQueries } = LAYOUT_DEFAULTS;

const StyledContent = styled.div`
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.large};
  display: block;
  border-bottom: ${borderSize} ${borderStyle} var(--accent-color);
  @media ${mediaQueries.desktop} {
    margin-bottom: ${spacing.large};
  }
`;

export const ExperienceContent = ({
  title,
  specification,
  level,
  startDate,
  endDate,
  location,
  link,
  description,
  accomplishments,
}: ExperienceType) => (
  <StyledContent>
    <Row $columnsDesktop={10} $gap="large">
      <Col $rangeDesktop={6}>
        <Heading $accent $level={3}>
          {title}
        </Heading>
        <Hr $accent />
      </Col>
    </Row>
    <Row $columnsDesktop={12} $gap="large">
      <Col $rangeDesktop={4}>
        <Heading $accent $level={4}>
          {specification}
        </Heading>
        <Hr $accent />
        <Text>
          {level}
          <br />
          {startDate}&ndash;{endDate}
          <br />
          {location}
          {link && (
            <>
              <br />
              <Link href={link} target="_blank" rel="noopener">
                Link
              </Link>
            </>
          )}
        </Text>
      </Col>
      <Col $rangeDesktop={7}>
        {description && <Text>{description}</Text>}
        {accomplishments.length > 0 && (
          <Ul $flexDirection="column">
            {accomplishments.map((a) => (
              <Li key={a}>{a}</Li>
            ))}
          </Ul>
        )}
      </Col>
    </Row>
  </StyledContent>
);

export const Experience = () => {
  const totalExperience = [...careers, ...education];

  return (
    <Row $gap="large">
      <Col>
        {totalExperience.map((e) => (
          <ExperienceContent key={e.title} {...e} />
        ))}
      </Col>
    </Row>
  );
};
