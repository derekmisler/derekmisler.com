import styled from 'styled-components'
import { useState, SFC, memo, MouseEvent, useEffect } from 'react'
import { Text, Heading, Small, Link } from 'atoms/Typography'
import { Row, Col } from 'atoms/Grid'
import { Ul, Li } from 'atoms/Lists'
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
  border-bottom: ${({ theme, isActive }) => `${borderSize} ${borderStyle} ${isActive ? theme.accent : theme.link}`};
  &:hover {
    border-bottom-color: ${({ theme, isActive }) => isActive ? theme.accent : theme.linkHover};
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
    <Row columnsDesktop={5} gap='large'>
      <Col rangeDesktop={3}>
        {c.description && <Text>{c.description}</Text>}
        {c.accomplishments.length > 0 && (
          <Ul flexDirection='column' bullet>
            {c.accomplishments.map(a => (
              <Li key={a}><Small>{a}<br /></Small></Li>
            ))}
          </Ul>
        )}
      </Col>
      <Col rangeDesktop={2}>
        <Heading level={4}>
          {c.specification}
        </Heading>
        <Text>
          {c.startDate}&ndash;{c.endDate}
          <br />
          {c.location}
          {c.link && <><br /><Link href={c.link} target='_blank'>Link</Link></>}
        </Text>
      </Col>
    </Row>
  </>
))

export const Experience: SFC<{}> = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0)

  const onClick = (e: MouseEvent) => {
    const id: number = Number(e.currentTarget.id)
    if (id !== activeIndex) setActiveIndex(id)
  }

  return (
    <Row columnsDesktop={3} gap='large'>
      <StyledCol isActive rangeDesktop={2}>
        <ActiveExperienceCard c={careers[activeIndex]} />
      </StyledCol>
      <Col>
        {
          careers.map((c, i) => (
            <StyledCol isActive={i === activeIndex} key={c.title} id={`${i}`} onClick={onClick}>
              <InactiveExperienceCard c={c} />
            </StyledCol>
          ))
        }
      </Col>
    </Row>
  )
})

export default Experience
