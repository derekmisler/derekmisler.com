import styled from 'styled-components'
import { ExperienceTypes } from 'constants/resume'
import { Text, Heading, Link } from 'atoms/Typography'
import { Row, Col } from 'atoms/Grid'
import { Ul, Li } from 'atoms/Lists'
import { Hr } from 'atoms/Hr'
import { fixWidow } from 'utils/stringFormat'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const { borderSize, borderStyle, spacing, mediaQueries } = LAYOUT_DEFAULTS

const StyledContent = styled.div<{ isActive?: boolean }>`
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.large};
  display: block;
  border-bottom: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.accent}`};
  @media ${mediaQueries.desktop} {
    height: 100%;
    margin-bottom: ${spacing.large};
    display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  }
`

interface ExperienceContentProps {
  e: ExperienceTypes
  activeId?: string
  id: string
}

export const ExperienceContent = ({ e, id, activeId }: ExperienceContentProps) => (
  <StyledContent isActive={id === activeId}>
    <Row columnsDesktop={10} gap='large'>
      <Col rangeDesktop={6}>
        <Heading level={3}>{e.title}</Heading>
        <Hr />
      </Col>
    </Row>
    <Row columnsDesktop={10} gap='large'>
      <Col rangeDesktop={4}>
        <Heading level={4}>{e.specification}</Heading>
        <Hr />
        <Text>
          {e.level}
          <br />
          {e.startDate}&ndash;{e.endDate}
          <br />
          {e.location}
          {e.link && (
            <>
              <br />
              <Link href={e.link} target='_blank' rel='noopener'>
                Link
              </Link>
            </>
          )}
        </Text>
      </Col>
      <Col rangeDesktop={6}>
        {e.description && <Text>{fixWidow(e.description)}</Text>}
        {e.accomplishments.length > 0 && (
          <Ul flexDirection='column' bullet>
            {e.accomplishments.map((a: string) => (
              <Li key={a}>{fixWidow(a)}</Li>
            ))}
          </Ul>
        )}
      </Col>
    </Row>
  </StyledContent>
)
