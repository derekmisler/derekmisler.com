import styled from 'styled-components'
import { HeadingProps, FontStyle, FontWeight } from 'types'
import { TYPOGRAPHY_DEFAULTS } from 'styles'

export const Heading = styled('div').attrs<HeadingProps>(
  ({ level }: { level: number }) => ({
    role: 'heading',
    'aria-level': level || 1
  })
)<HeadingProps>`
  margin: ${({ level }) => (level !== 1 ? '2.75rem 0 1rem' : '0 0 1rem')};
  font-family: ${TYPOGRAPHY_DEFAULTS.serif};
  font-size: ${({ level }) =>
    TYPOGRAPHY_DEFAULTS.headingFontSizes[(level as number) - 1]};
  font-weight: ${FontWeight.Normal};
  font-style: ${FontStyle.Normal};
  line-height: ${TYPOGRAPHY_DEFAULTS.headingLineHeight};
`

export const Link = styled('a')<{}>`
  display: inline-block;
  color: ${TYPOGRAPHY_DEFAULTS.linkColor};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    color: ${TYPOGRAPHY_DEFAULTS.linkColorHover};
  }
`

export const Text = styled('p')<{}>`
  margin-bottom: 1.25em;
`

export const Small = styled('small')<{}>`
  font-size: ${TYPOGRAPHY_DEFAULTS.smallFontSize};
`
