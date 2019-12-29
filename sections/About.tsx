import { Text } from 'components/Typography'
import { biography } from 'constants/resume'
import { fixWidow } from 'utils/stringFormat'
import { Row, Col } from 'components/Grid'
import { Qualifications } from 'components/Qualifications'

export const About = () => (
  <>
    <Row columnsDesktop={5} gap='large'>
      <Col rangeDesktop={3}>
        <Text columns={2}>{fixWidow(biography)}</Text>
      </Col>
      <Col rangeDesktop={2}>
        <Qualifications />
      </Col>
    </Row>
  </>
)

export default About
