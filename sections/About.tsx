import { Text } from 'components/Typography'
import { biography } from 'constants/resume'
import { fixWidow } from 'utils/stringFormat'
import { Row, Col } from 'components/Grid'
import { Qualifications } from 'components/Qualifications'

export const About = () => (
  <>
    <Row columnsDesktop={2} gap='large'>
      <Col>
        <Text columns={2}>{fixWidow(biography)}</Text>
      </Col>
      <Col>
        <Qualifications />
      </Col>
    </Row>
  </>
)

export default About
