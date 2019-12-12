import { skills, SkillTypes } from 'constants/resume'
import { Small } from 'components/Typography'
import { Row, Col } from 'components/Grid'
import { compare } from 'utils/compare'
import { Star } from 'components/Icons'
import { Text, Heading } from 'components/Typography'

export const Qualifications = () => {
  const sortedSkills: SkillTypes[] = skills.sort((a, b) => {
    return compare(a.level, b.level) || compare(a.title, b.title)
  })

  const maxStars = [...Array(sortedSkills[0].level)]

  return (
    <>
      <Heading level={4}>Qualifications</Heading>
      <Row columns={1} columnsDesktop={2} gap='large'>
        {sortedSkills.map(skill => (
          <Col range={1} key={`qualification-${skill.title}-${skill.level}`}>
            <Row vAlign='flex-end' gap='small' columns={8} columnsDesktop={12}>
              <Col range={3} rangeDesktop={7}>
                <Text inline={true}>
                  <Small>{skill.title}</Small>
                </Text>
              </Col>
              {maxStars.map((...args) => (
                <Col key={`star-${skill.title}-${args[1]}`}>
                  <Star active={args[1] + 1 <= skill.level} />
                </Col>
              ))}
            </Row>
          </Col>
        ))}
      </Row>
    </>
  )
}
