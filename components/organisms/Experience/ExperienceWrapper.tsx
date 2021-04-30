import { useRef, useState } from 'react'
import { Row, Col } from 'atoms/Grid'
import { careers, education } from 'constants/resume'
import { ExperienceContent } from './ExperienceContent'
import { ExperienceTab } from './ExperienceTab'

export const Experience = () => {
  const totalExperience = [...careers, ...education]
  const [activeId, setActiveId] = useState(totalExperience[0].title)
  const elementWrapper = useRef<HTMLDivElement>(null)

  const onClick = (id: string) => {
    if (id !== activeId) {
      const { current } = elementWrapper || {}
      if (current) current.scrollIntoView({ behavior: 'smooth' })
      setActiveId(id)
    }
  }

  return (
    <div ref={elementWrapper}>
      <Row columnsDesktop={10} gap='large'>
        <Col rangeDesktop={2}>
          {totalExperience.map(e => (
            <ExperienceTab e={e} id={e.title} key={e.title} onClick={onClick} activeId={activeId} />
          ))}
        </Col>
        <Col rangeDesktop={8}>
          {totalExperience.map(e => (
            <ExperienceContent e={e} id={e.title} key={e.title} activeId={activeId} />
          ))}
        </Col>
      </Row>
    </div>
  )
}
