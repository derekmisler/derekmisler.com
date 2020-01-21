import styled from 'styled-components'
import { useState, SFC, memo, MouseEvent } from 'react'
import { Text, Heading, Small, Link } from 'atoms/Typography'
import { Row, Col } from 'atoms/Grid'
import { Ul, Li } from 'atoms/Lists'
import { Hr } from 'atoms/Hr'
import { careers, ExperienceTypes, education } from 'constants/resume'
import { LAYOUT_DEFAULTS, StyledComponentProps } from 'styles/layout'
import { fixWidow } from 'utils/stringFormat'

const { borderSize, borderStyle, spacing } = LAYOUT_DEFAULTS

interface ExperienceCardProps extends StyledComponentProps {
  e: ExperienceTypes
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

const InactiveExperienceCard: SFC<ExperienceCardProps> = memo(({ e }) => (
  <>
    <Heading level={5}>
      {e.startDate}&ndash;{e.endDate}
      <br />
      {e.title}
    </Heading>
    <Text inline transparent>
      <Small>{e.location}</Small>
    </Text>
  </>
))

const ActiveExperienceCard: SFC<ExperienceCardProps> = memo(({ e }) => (
  <>
    <Row columnsDesktop={5} gap='large'>
      <Col rangeDesktop={3}>
        <Heading level={3}>{e.title}</Heading>
        {e.description && <Text><Small>{fixWidow(e.description)}</Small></Text>}
        {e.accomplishments.length > 0 && (
          <Ul flexDirection='column' bullet>
            {e.accomplishments.map((a: string) => (
              <Li key={a}><Small>{fixWidow(a)}</Small></Li>
            ))}
          </Ul>
        )}
      </Col>
      <Col rangeDesktop={2}>
        <Hr large />
        <Heading level={4}>
          {e.specification}
        </Heading>
        <Text>
          {e.startDate}&ndash;{e.endDate}
          <br />
          {e.location}
          {e.link && <><br /><Link href={e.link} target='_blank'>Link</Link></>}
        </Text>
      </Col>
    </Row>
  </>
))

export const Experience: SFC<{}> = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [edu] = education

  const onClick = (e: MouseEvent) => {
    const id: number = Number(e.currentTarget.id)
    if (id !== activeIndex) setActiveIndex(id)
  }

  return (
    <>
      <Row columnsDesktop={3} gap='large'>
        <StyledCol isActive rangeDesktop={2}>
          <ActiveExperienceCard e={careers[activeIndex]} />
        </StyledCol>
        <Col>
          {
            careers.map((c, i) => (
              <StyledCol isActive={i === activeIndex} key={c.title} id={`${i}`} onClick={onClick}>
                <InactiveExperienceCard e={c} />
              </StyledCol>
            ))
          }
        </Col>
      </Row>
      <Row columnsDesktop={3} gap='large'>
        <StyledCol isActive rangeDesktop={2}>
          <ActiveExperienceCard e={edu} />
        </StyledCol>
      </Row>
    </>
  )
})

export default Experience
