import { Text } from 'components/Typography'
import { resume } from 'constants/resume'
import { fixWidow } from 'utils/stringFormat'
import { Card } from 'components/Card'
import { SmMdLgWidths } from 'types/layout'

export const About = () => {
  const {
    profile: { biography }
  } = resume
  return (
    <Card columns='2fr 1fr' gap={SmMdLgWidths.Small} noAnimation>
      <Text>{fixWidow(biography)}</Text>
    </Card>
  )
}

export default About
