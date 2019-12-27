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
    <Heading level={4}>Qualifications</Heading>
    <Row as='ul' columns={1} columnsDesktop={2} gap='large'>
      {sortedSkills.map(skill => (
        <Col as='li' key={skill.title}>
          <Row columns={2} gap='small' vAlign='baseline'>
            <Col>
              <Text inline textAlign='right'>
                <Small>{skill.title}</Small>
              </Text>
            </Col>
            <Col>
              <QualificationBar level={skill.level} />
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  </>
))
