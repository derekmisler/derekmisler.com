import { SFC, memo } from 'react'
import { ExperienceTypes } from 'constants/resume'
import { Text, Heading, Small, Link } from 'atoms/Typography'
import { Row, Col } from 'atoms/Grid'
import { Ul, Li } from 'atoms/Lists'
import { Hr } from 'atoms/Hr'
import { fixWidow } from 'utils/stringFormat'

export const ActiveExperienceCard: SFC<{ e: ExperienceTypes }> = memo(({ e }) => (
  <>
    <Row columnsDesktop={10} gap='large'>
      <Col rangeDesktop={4}>
        <Heading level={3}>{e.title}</Heading>
        <Hr />
      </Col>
    </Row>
    <Row columnsDesktop={10} gap='large'>
      <Col rangeDesktop={4}>
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
