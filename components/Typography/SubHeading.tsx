import styled from 'styled-components'
import { TextProps } from 'types/typography'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { Small } from './Small'

const {
  opacity
} = LAYOUT_DEFAULTS

export const SubHeading = styled(Small) <TextProps>`
  opacity: ${opacity};
  font-family: inherit;
`
