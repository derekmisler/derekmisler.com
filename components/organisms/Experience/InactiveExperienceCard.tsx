import { SFC, memo } from 'react'
import { ExperienceTypes } from 'constants/resume'
import { Heading, Small } from 'atoms/Typography'

export const InactiveExperienceCard: SFC<{ e: ExperienceTypes }> = memo(({ e }) => (
  <>
    <Heading level={5}>
      {e.title}
      <br />
      {e.startDate}&ndash;{e.endDate}
    </Heading>
    <Small>{e.location}</Small>
  </>
))
