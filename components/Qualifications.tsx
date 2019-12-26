import { Fragment, useContext, memo, SFC } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { skills, SkillTypes } from 'constants/resume'
import { Row, Col } from 'components/Grid'
import { compare } from 'utils/compare'
import { Small, Text, Heading } from 'components/Typography'
import { LAYOUT_DEFAULTS } from 'styles'

const sortedSkills: SkillTypes[] = skills.sort((a, b) => {
  return compare(a.level, b.level) || compare(a.title, b.title)
})
const maxLevel: number = sortedSkills[0].level

const QualificationBar = styled.div<{ level: number, accent: string }>`
  width: ${({ level }) => 100 / maxLevel * level}%;
  background-color: ${({ accent }) => accent};;
  height: ${LAYOUT_DEFAULTS.borderSize}
`

export const Qualifications: SFC = memo(() => {
  const { accent } = useContext(ThemeContext)
  return (
    <>
      <Heading level={4}>Qualifications</Heading>
      <Row columns={2} gap='large'>
        {sortedSkills.map(skill => (
          <Fragment key={skill.title}>
            <Col>
              <Text inline={true}>
                <Small>{skill.title}</Small>
              </Text>
            </Col>
            <Col>
              <QualificationBar accent={accent} level={skill.level} />
            </Col>
          </Fragment>
        ))}
      </Row>
    </>
  )
})
