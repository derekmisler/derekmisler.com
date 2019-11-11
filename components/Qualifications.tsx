import { skills, SkillTypes } from 'constants/resume'
import { Small } from 'components/Typography'
import { Card } from 'components/Card'
import { compare } from 'utils/compare'
import { CardAlignment, SmMdLgWidths } from 'types/layout'
import { Star } from 'components/Icons'

export const Qualifications = () => {
  const sortedSkills: SkillTypes[] = skills.sort((a, b) => {
    return compare(a.level, b.level) || compare(a.title, b.title)
  })

  const maxStars = [...Array(sortedSkills[0].level)]

  return (
    <Card as='span' columns={2} gap={SmMdLgWidths.Large}>
      {sortedSkills.map(skill => (
        <Card
          as='span'
          align={CardAlignment.SpaceBetween}
          columns={2}
          key={skill.title}
          margin={SmMdLgWidths.Small}
        >
          <Small>{skill.title}</Small>
          <Card columns={maxStars.length}>
            {maxStars.map((...args) => (
              <Star
                key={`${skill.title}-${args[1]}`}
                active={args[1] + 1 <= skill.level}
              />
            ))}
          </Card>
        </Card>
      ))}
    </Card>
  )
}
