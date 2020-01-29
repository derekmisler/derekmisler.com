import styled from 'styled-components'
import { useRef, useState, memo, MouseEvent } from 'react'
import { Row, Col } from 'atoms/Grid'
import { careers, education } from 'constants/resume'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { ExperienceContent } from './ExperienceContent'
import { ExperienceTab } from './ExperienceTab'

const { borderSize, borderStyle, spacing, mediaQueries } = LAYOUT_DEFAULTS

const StyledExperienceContentWrapper = styled(Col)<{ isActive?: boolean }>`
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.large};
  display: block;
  border-bottom: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.accent}`};
  @media ${mediaQueries.desktop} {
    margin-bottom: ${spacing.large};
    display: ${({ isActive }) => isActive ? 'block' : 'none'};
  }
`

export const Experience = memo(() => {
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
          {
            totalExperience.map(e => (
              <ExperienceTab e={e} id={e.title} key={e.title} onClick={onClick} activeId={activeId} />
            ))
          }
        </Col>
        <Col rangeDesktop={8}>
          {
            totalExperience.map(e => (
              <ExperienceContent e={e} id={e.title} key={e.title} activeId={activeId} />
            ))
          }
        </Col>
      </Row>
    </div>
  )
})
