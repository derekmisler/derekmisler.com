import styled from 'styled-components';
import { type Experience as ExperienceType } from '@/constants/resume';
import { Text, Heading, Link } from '@/atoms/Typography';
import { Row, Col } from '@/atoms/Grid';
import { Ul, Li } from '@/atoms/Lists';
import { Hr } from '@/atoms/Hr';
import { fixWidow } from '@/utils/fixWidow';
import { LAYOUT_DEFAULTS } from '@/styles/layout';
import { careers, education } from '@/constants/resume';

const { borderSize, borderStyle, spacing, mediaQueries } = LAYOUT_DEFAULTS;

const StyledContent = styled.div`
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.large};
  display: block;
  border-bottom: ${({ theme }) =>
    `${borderSize} ${borderStyle} ${theme.$accent}`};
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
    <Row $columnsDesktop={10} $gap="large">
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
      <Col $rangeDesktop={6}>
        {description && <Text>{fixWidow(description)}</Text>}
        {accomplishments.length > 0 && (
          <Ul $flexDirection="column" $bullet>
            {accomplishments.map((a: string) => (
              <Li key={a}>{fixWidow(a)}</Li>
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
    <Row $columnsDesktop={10} $gap="large">
      <Col $rangeDesktop={8}>
        {totalExperience.map((e) => (
          <ExperienceContent key={e.title} {...e} />
        ))}
      </Col>
    </Row>
  );
};
