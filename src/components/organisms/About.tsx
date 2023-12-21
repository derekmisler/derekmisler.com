import { Text } from 'components/atoms/Typography';
import { Row, Col } from 'components/atoms/Grid';
import { Qualifications } from 'components/organisms/Qualifications';

export const biography = [
  `Derek's passion lies in making the web a more efficient, accessible, and welcoming space. His graphic design education coupled with freelance work building websites for small businesses in his town, allowed him to blend his eye for design with his love for front-end development.`,
  `The career experiences listed below span a broad range of web, desktop and mobile, and native app development languages. They have given Derek a diverse, well-rounded education. Along with a robust background in design, substantial UI/UX experience, and an extensive knowledge of typography, Derek's experience and education have made him a uniquely capable front-end software engineer.`,
];

export const About = () => (
  <Row $columnsDesktop={5} $gap="large">
    <Col $rangeDesktop={3}>
      {biography.map((bio) => (
        <Text key={bio}>{bio}</Text>
      ))}
    </Col>
    <Col $rangeDesktop={2}>
      <Qualifications />
    </Col>
  </Row>
);
