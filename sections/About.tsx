import { Text } from 'components/Typography'
import { resume } from 'constants/resume'
import { fixWidow } from 'utils/stringFormat'

export const About = () => {
  const {
    profile: { biography }
  } = resume
  return <Text>{fixWidow(biography)}</Text>
}

export default About
