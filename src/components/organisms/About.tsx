import { Text } from 'components/atoms/Typography';
import { biography } from 'constants/resume';
import { fixWidow } from 'utils/fixWidow';
import { Row, Col } from 'components/atoms/Grid';
import { Qualifications } from 'components/organisms/Qualifications';

export const About = () => (
  <Row $columnsDesktop={5} $gap="large">
    <Col $rangeDesktop={3}>
      <Text>{fixWidow(biography)}</Text>
    </Col>
    <Col $rangeDesktop={2}>
      <Qualifications />
    </Col>
  </Row>
);
