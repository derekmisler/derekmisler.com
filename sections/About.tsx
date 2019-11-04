import { Text } from 'components/Typography'
import { biography } from 'constants/resume'
import { fixWidow } from 'utils/stringFormat'
import { Card } from 'components/Card'
import { Qualifications } from 'components/Qualifications'
import { SmMdLgWidths } from 'types/layout'
import { Hr } from 'components/Hr'

export const About = () => (
  <Card columns='2fr 1fr' gap={SmMdLgWidths.Small}>
    <Text>
      {fixWidow(biography)}
      <Hr />
      <Qualifications />
    </Text>
  </Card>
)

export default About
