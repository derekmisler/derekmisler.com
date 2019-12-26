import { SFC, MouseEventHandler, memo } from 'react'
import { Row } from 'components/Grid'
import { Text } from 'components/Typography'
import { Action } from 'components/Buttons'

export const Footer: SFC<{
  handleClick: MouseEventHandler
}> = memo(({ handleClick }) => {
  return (
    <Row as='footer'>
      <Action onClick={handleClick} active={false} />
      <Text accent>Footer</Text>
    </Row>
  )
})
