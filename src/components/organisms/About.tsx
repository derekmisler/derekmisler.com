import { Text } from 'components/atoms/Typography';
import { Row, Col } from 'components/atoms/Grid';
import { Qualifications } from 'components/organisms/Qualifications';

export const biography = [
  `My journey with front-end development began at 13, driven by a natural curiosity and a passion for understanding how things work. The web, for me, has always been a playground for experimentation and learning.`,
  `I pursued a degree in design, which, coupled with my freelance work, allowed me to blend my design acumen with my love for front-end development. This experience has enriched my approach to building websites for local businesses.`,
  `My passion lies in making the web a more efficient, accessible, and welcoming space. My education spans a range of web and app development languages, both for desktop and mobile. With a robust background in design, substantial UI/UX experience, and an extensive knowledge of typography, I advocate for developers to embrace design principles. I firmly believe that this diverse, well-rounded education fortifies my capabilities as an engineer.`,
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
