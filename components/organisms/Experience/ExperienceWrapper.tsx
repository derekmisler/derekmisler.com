import styled from 'styled-components'
import { useRef, useState, memo, MouseEvent } from 'react'
import { Row, Col } from 'atoms/Grid'
import { careers, education } from 'constants/resume'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { ActiveExperienceCard } from './ActiveExperienceCard'
import { InactiveExperienceCard } from './InactiveExperienceCard'

const { borderSize, borderStyle, spacing, mediaQueries } = LAYOUT_DEFAULTS

const StyledExperienceWrapper = styled(Col)<{ isActive?: boolean }>`
  display: none;
  @media ${mediaQueries.desktop} {
    display: block;
    margin-bottom: ${spacing.large};
    padding: ${spacing.small} 0;
    cursor: ${({ isActive }) => isActive ? undefined : 'pointer'};
    border-bottom: ${({ theme, isActive }) => `${borderSize} ${borderStyle} ${isActive ? theme.accent : theme.link}`};
    &:hover {
      border-bottom-color: ${({ theme, isActive }) => isActive ? theme.accent : theme.linkHover};
    }
  }
`

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
  const [activeIndex, setActiveIndex] = useState(0)
  const totalExperience = [...careers, ...education]
  const elementWrapper = useRef<HTMLDivElement>(null)

  const onClick = (e: MouseEvent) => {
    const { current } = elementWrapper || {}
    if (current) current.scrollIntoView({ behavior: 'smooth' })
    const id: number = Number(e.currentTarget.id)
    if (id !== activeIndex) setActiveIndex(id)
  }

  return (
    <div ref={elementWrapper}>
      <Row columnsDesktop={10} gap='large'>
        <Col rangeDesktop={2}>
          <Row columns={2} columnsDesktop={1} gap='small'>
            {
              totalExperience.map((e, i) => (
                <StyledExperienceWrapper key={e.title} isActive={i === activeIndex} id={`${i}`} onClick={onClick}>
                  <InactiveExperienceCard e={e} />
                </StyledExperienceWrapper>
              ))
            }
          </Row>
        </Col>
        {
          totalExperience.map((e, i) => (
            <StyledExperienceContentWrapper key={e.title} isActive={i === activeIndex}  rangeDesktop={8}>
              <ActiveExperienceCard e={e} />
            </StyledExperienceContentWrapper>
          ))
        }
      </Row>
    </div>
  )
})
