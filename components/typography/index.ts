import styled from 'styled-components'
import { HeadingProps, TypographyTypes, FontStyle, FontWeight } from './types'
import { orange, red, black } from 'styles'

export const TypeSettings: TypographyTypes = {
  sans: '"Lato", "Helvetica Neue", Helvetica, sans-serif',
  serif: '"Patua One", serif',
  textColor: black,
  linkColor: orange,
  linkColorHover: red,
  baseFontSize: '16px',
  fontSizes: ['12vw', '12vw', '12vw', '12vw', '12vw', '12vw'],
  baseLineHeight: 1.5
}

export const Heading = styled('div').attrs<HeadingProps>(
  ({ level }: { level: number }) => ({
    role: 'heading',
    'aria-level': level || 1
  })
)<HeadingProps>`
  font-family: ${TypeSettings.serif};
  font-size: ${({ level }) =>
    TypeSettings.fontSizes[(level as number) - 1 || 0]};
  font-weight: ${FontWeight.Normal};
  font-style: ${FontStyle.Normal};
  line-height: ${TypeSettings.baseLineHeight};
`

export const Link = styled('a')<{}>`
  display: inline-block;
  color: ${TypeSettings.linkColor};
  &:hover,
  &:focus,
  &:active {
    color: ${TypeSettings.linkColorHover};
  }
`

export * from './types'
