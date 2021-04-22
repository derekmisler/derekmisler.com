import { FC } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'atoms/Grid'
import { Small, Text, Heading } from 'atoms/Typography'
import { skills, SkillTypes } from 'constants/resume'
import { compare } from 'utils/compare'
import { LAYOUT_DEFAULTS } from 'styles'

const sortedSkills: SkillTypes[] = skills.sort((a, b) => {
  return compare(a.level, b.level) || compare(a.title, b.title)
})
const maxLevel: number = sortedSkills[0].level

const { borderSize, borderSizeSmall } = LAYOUT_DEFAULTS

interface QualificationTypes {
  active?: boolean
}

const QualificationBar = styled.div<QualificationTypes>`
  display: block;
  background-color: ${({ active, theme }) => (active ? theme.accent : 'transparent')};
  height: ${borderSize};
  margin-right: ${borderSizeSmall};
  margin-bottom: ${borderSize};
`

export const Qualifications: FC = () => (
  <>
    <Heading level={3}>Tools that I use</Heading>
    <Row as='ul' columns={2} columnsDesktop={3} gap='large'>
      {sortedSkills.map(skill => (
        <Col as='li' key={skill.title}>
          <Small>{skill.title}</Small>
          <Row columns={maxLevel}>
            {Array(maxLevel)
              .fill(skill.level)
              .map((level, i) => (
                <Col key={`${skill.title}-${i}`}>
                  <QualificationBar active={i < level} />
                </Col>
              ))}
          </Row>
        </Col>
      ))}
    </Row>
  </>
)
