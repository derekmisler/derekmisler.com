import styled from 'styled-components';
import { Row, Col } from 'components/atoms/Grid';
import { Small, Heading } from 'components/atoms/Typography';
import { skills, SkillTypes } from 'constants/resume';
import { compare } from 'utils/compare';
import { LAYOUT_DEFAULTS } from 'styles/layout';

const sortedSkills: SkillTypes[] = skills.sort((a, b) => {
  return compare(a.level, b.level) || compare(a.title, b.title);
});
const maxLevel: number = sortedSkills[0].level;

const { borderSize, borderSizeSmall } = LAYOUT_DEFAULTS;

interface QualificationTypes {
  $active?: boolean;
}

const QualificationBar = styled.div<QualificationTypes>`
  display: block;
  background-color: ${({ $active }) =>
    $active ? 'var(--accent-color)' : 'transparent'};
  height: ${borderSize};
  margin-right: ${borderSizeSmall};
  margin-bottom: ${borderSize};
`;

export const Qualifications = () => (
  <>
    <Heading $level={3}>Skills I Have</Heading>
    <Row as="ul" $columns={2} $columnsDesktop={2} $gap="large">
      {sortedSkills.map((skill) => (
        <Col as="li" key={skill.title}>
          <Small>{skill.title}</Small>
          <Row $columns={maxLevel} $gap="small">
            {Array(maxLevel)
              .fill(skill.level)
              .map((level, i) => (
                <Col key={`${skill.title}-${i}`}>
                  <QualificationBar $active={i < level} />
                </Col>
              ))}
          </Row>
        </Col>
      ))}
    </Row>
  </>
);
