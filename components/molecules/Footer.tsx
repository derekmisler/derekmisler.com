import { memo } from 'react'
import { Row } from 'atoms/Grid'
import { Text } from 'atoms/Typography'

export const Footer = memo(() => {
  return (
    <Row as='footer'>
      <Text accent>Footer</Text>
    </Row>
  )
})
