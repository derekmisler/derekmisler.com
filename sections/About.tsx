import { Text } from 'components/Typography'
import { biography } from 'constants/resume'
import { fixWidow } from 'utils/stringFormat'
import { Card } from 'components/Card'
import { Qualifications } from 'components/Qualifications'
import { SmMdLgWidths } from 'types/layout'
import { Hr } from 'components/Hr'
import { Img } from 'components/Img'

export const About = () => (
  <Card columns='2fr 1fr' gap={SmMdLgWidths.Large}>
    <Text>
      {fixWidow(biography)}
      <Hr />
      <Qualifications />
    </Text>
    <Img alt='Derek Misler' fileName='derek-misler.jpg' />
  </Card>
)

export default About
