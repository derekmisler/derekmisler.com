import { ContainerWidths } from 'types/layout'
import { Container } from './Container'
import { Text } from './Typography'

const Footer = () => (
  <Container as='footer' width={ContainerWidths.Large}>
    <Text accent>Footer</Text>
  </Container>
)

export default Footer
