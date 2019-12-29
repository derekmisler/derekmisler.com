import { memo, SFC } from 'react'
import styled from 'styled-components'
import { skills, SkillTypes } from 'constants/resume'
import { Row, Col } from 'components/Grid'
import { compare } from 'utils/compare'
import { Small, Text, Heading } from 'components/Typography'
import { LAYOUT_DEFAULTS } from 'styles'

const sortedSkills: SkillTypes[] = skills.sort((a, b) => {
  return compare(a.level, b.level) || compare(a.title, b.title)
})
const maxLevel: number = sortedSkills[0].level

const { borderSize, borderStyle, borderSizeSmall, spacing } = LAYOUT_DEFAULTS

interface QualificationTypes {
  active?: boolean
}

const QualificationBar = styled.div<QualificationTypes>`
  display: block;
  background-color: ${({ active, theme }) => active ? theme.accent : 'transparent'};
  height: ${borderSize};
  border-right: ${({ active, theme }) => active ? `${borderSizeSmall} ${borderStyle} ${theme.background}` : 0};
  margin-bottom: ${spacing.small};
`

export const Qualifications: SFC = memo(() => (
  <>
    <Heading level={4}>Tools</Heading>
    <Row as='ul' columnsDesktop={3} gap='large'>
      {sortedSkills.map(skill => (
        <Col as='li' key={skill.title}>
          <Text inline>
            <Small>{skill.title}</Small>
          </Text>
          <Row columns={maxLevel}>
            {Array(maxLevel).fill(skill.level).map((level, i) => (
              <Col key={`${skill.title}-${i}`}>
                <QualificationBar active={i < level} />
              </Col>
            ))}
          </Row>
        </Col>
      ))}
    </Row>
  </>
))
