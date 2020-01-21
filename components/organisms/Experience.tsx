import styled from 'styled-components'
import { useState, SFC, memo, MouseEvent, useEffect } from 'react'
import { Text, Heading, Small } from 'atoms/Typography'
import { Row, Col } from 'atoms/Grid'
import { careers, CareerTypes } from 'constants/resume'
import { LAYOUT_DEFAULTS, StyledComponentProps } from 'styles/layout'

const { borderSize, borderStyle, spacing } = LAYOUT_DEFAULTS

interface ExperienceCardProps extends StyledComponentProps {
  c: CareerTypes
}

const StyledCol = styled(Col)<{ isActive?: boolean }>`
  margin-bottom: ${spacing.large};
  padding: ${spacing.small} 0;
  cursor: ${({ isActive }) => isActive ? undefined : 'pointer'};
  border-bottom: ${({ theme, isActive }) => `${borderSize} ${borderStyle} ${isActive ? theme.text : theme.link}`};
  &:hover {
    border-bottom-color: ${({ theme, isActive }) => isActive ? theme.text : theme.linkHover};
  }
`

const InactiveExperienceCard: SFC<ExperienceCardProps> = memo(({ c }) => (
  <>
    <Heading level={5}>
      {c.startDate}&ndash;{c.endDate}
      <br />
      {c.title}
    </Heading>
    <Text inline transparent>
      <Small>{c.location}</Small>
    </Text>
  </>
))

const ActiveExperienceCard: SFC<ExperienceCardProps> = memo(({ c }) => (
  <>
    <Heading level={3}>{c.title}</Heading>
    <Row columnsDesktop={2} gap='large'>
      <Col rangeDesktop='2..'>
        <Heading level={4}>
          {c.specification}
        </Heading>
        <Text>
          {c.startDate}&ndash;{c.endDate}
          <br />
          {c.location}
        </Text>
      </Col>
    </Row>
  </>
))

export const Experience: SFC<{}> = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [sortedCareers, setSortedCareers] = useState([...careers])

  const onClick = (e: MouseEvent) => {
    const id: number = Number(e.currentTarget.id)
    if (id !== activeIndex) setActiveIndex(id)
  }

  useEffect(() => {
    const tempArray = [...sortedCareers]
    setSortedCareers(tempArray.splice(activeIndex, 1))
  }, [activeIndex])


  return (
    <Row columnsDesktop={3} gap='large'>
      <StyledCol isActive rangeDesktop={2}>
        <ActiveExperienceCard c={careers[activeIndex]} />
      </StyledCol>
      {
        sortedCareers.map((c, i) => (
          <StyledCol id={i.toString()} onClick={onClick}>
            <InactiveExperienceCard c={c} />
          </StyledCol>
        ))
      }
    </Row>
  )
})

export default Experience
