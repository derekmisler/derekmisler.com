import { Text } from '@/atoms/Typography'
import { biography } from '@/constants/resume'
import { fixWidow } from '@/utils/stringFormat'
import { Row, Col } from '@/atoms/Grid'
import { Qualifications } from '@/organisms/Qualifications'

export const About = () => (
  <>
    <Row $columnsDesktop={5} $gap='large'>
      <Col $rangeDesktop={3}>
        <Text>{fixWidow(biography)}</Text>
      </Col>
      <Col $rangeDesktop={2}>
        <Qualifications />
      </Col>
    </Row>
  </>
)
