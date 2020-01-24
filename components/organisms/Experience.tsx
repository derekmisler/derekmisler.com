import styled from 'styled-components'
import { useRef, useState, SFC, memo, MouseEvent } from 'react'
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

const StyledExperienceWrapper = styled(Col)<{ isActive?: boolean }>`
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
      {e.title}
      <br />
      {e.startDate}&ndash;{e.endDate}
    </Heading>
    <Small transparent>{e.location}</Small>
  </>
))

const ActiveExperienceCard: SFC<ExperienceCardProps> = memo(({ e }) => (
  <>
    <Row columnsDesktop={10} gap='large'>
      <Col rangeDesktop={4}>
        <Heading level={3}>{e.title}</Heading>
        <Hr />
        <Heading level={4}>
          {e.specification}
        </Heading>
        <Hr />
        <Text>
          {e.startDate}&ndash;{e.endDate}
          <br />
          {e.location}
          {e.link && <><br /><Link href={e.link} target='_blank' rel='noopener'>Link</Link></>}
        </Text>
      </Col>
      <Col rangeDesktop={6}>
        {e.description && <Small>{fixWidow(e.description)}</Small>}
        {e.accomplishments.length > 0 && (
          <Ul flexDirection='column' bullet>
            {e.accomplishments.map((a: string) => (
              <Li key={a}>{fixWidow(a)}</Li>
            ))}
          </Ul>
        )}
      </Col>
    </Row>
  </>
))

export const Experience: SFC<{}> = memo(() => {
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
    <>
      <Row columnsDesktop={10} gap='large'>
        <Col rangeDesktop={2}>
          <Row columns={2} columnsDesktop={1} gap='small'>
            {
              totalExperience.map((e, i) => (
                <Col key={e.title}>
                  <StyledExperienceWrapper isActive={i === activeIndex} id={`${i}`} onClick={onClick}>
                    <InactiveExperienceCard e={e} />
                  </StyledExperienceWrapper>
                </Col>
              ))
            }
          </Row>
        </Col>
        <StyledExperienceWrapper isActive rangeDesktop={8}>
          <div ref={elementWrapper}>
            <ActiveExperienceCard e={totalExperience[activeIndex]} />
          </div>
        </StyledExperienceWrapper>
      </Row>
    </>
  )
})

export default Experience
