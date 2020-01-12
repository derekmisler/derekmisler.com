import styled from 'styled-components'
import { useState, SFC, memo } from 'react'
import { Text } from 'components/Typography'
import { Row, Col } from 'components/Grid'
import { careers, CareerTypes } from 'constants/resume'
import { transitionDefaults, LAYOUT_DEFAULTS } from 'styles/layout'

const { timing, duration } = transitionDefaults
const { borderSize, borderStyle, spacing } = LAYOUT_DEFAULTS

interface ExperienceCardProps {
  career: CareerTypes
  index: number
  onClick: Function
  isActive?: boolean
}

const StyledExperiencCard = styled.div<{ isActive?: boolean }>`
  transition: ${timing} opacity ${duration};
  /* opacity: ${({ isActive }) => isActive ? 1 : .25 }; */
  margin: 0 ${({ isActive }) => isActive ? spacing.large : 0};
  padding: ${spacing.small};
  cursor: ${({ isActive }) => isActive ? undefined : 'pointer'};
  border: ${({ theme, isActive }) => `${isActive ? 0 : borderSize} ${borderStyle} ${theme.link}`};
`

const ExperienceCard: SFC<ExperienceCardProps> = memo(({ career, index, onClick, isActive }) => {
  const handleClick = () => onClick(index)
  return (
    <StyledExperiencCard isActive={isActive} onClick={handleClick}>
      <Text transparent={!isActive}>{career.title}</Text>
      <Text transparent={!isActive}>{career.specification}</Text>
    </StyledExperiencCard>
  )
})

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const lastIndex = careers.length - 1
  const prevIndex = activeIndex === 0 ? lastIndex : activeIndex - 1
  const nextIndex = activeIndex === lastIndex ? 0 : activeIndex + 1

  const onClick = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index)
  }

  return (
    <Row columnsDesktop={8}>
      <Col rangeDesktop={2}>
        <ExperienceCard onClick={onClick} index={prevIndex} career={careers[prevIndex]} />
      </Col>
      <Col rangeDesktop={4}>
        <ExperienceCard onClick={onClick} index={activeIndex} career={careers[activeIndex]} isActive />
      </Col>
      <Col rangeDesktop={2}>
        <ExperienceCard onClick={onClick} index={nextIndex} career={careers[nextIndex]} />
      </Col>
    </Row>
  )
}

export default Experience
