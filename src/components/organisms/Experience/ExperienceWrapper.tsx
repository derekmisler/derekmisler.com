import { Row, Col } from '@/atoms/Grid'
import { careers, education } from '@/constants/resume'
import { ExperienceContent } from './ExperienceContent'

export const Experience = () => {
  const totalExperience = [...careers, ...education]

  return (
      <Row $columnsDesktop={10} $gap='large'>
        <Col $rangeDesktop={8}>
          {totalExperience.map(e => (
            <ExperienceContent key={e.title} {...e} />
          ))}
        </Col>
      </Row>
  )
}
