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

const QualificationBar = styled.div<{ level: number }>`
  width: ${({ level }) => 100 / maxLevel * level}%;
  background-color: ${({ theme }) => theme.accent};
  height: ${LAYOUT_DEFAULTS.borderSize};
`

export const Qualifications: SFC = memo(() => (
  <>
    <Heading level={4}>Skills</Heading>
    <Row as='ul' columnsDesktop={3} gap='large'>
      {sortedSkills.map(skill => (
        <Col as='li' key={skill.title}>
          <Text inline>
            <Small>{skill.title}</Small>
          </Text>
          <QualificationBar level={skill.level} />
        </Col>
      ))}
    </Row>
  </>
))
