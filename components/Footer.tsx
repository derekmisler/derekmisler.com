import { SmMdLgWidths } from 'types/layout'
import { Container } from './Container'
import { Text } from './Typography'

export const Footer = () => (
  <Container as='footer' width={SmMdLgWidths.Large}>
    <Text accent>Footer</Text>
  </Container>
)
