import styled from 'styled-components'
import { HeadingProps, TextProps } from 'types/typography'
import { TYPOGRAPHY_DEFAULTS } from 'styles/typography'

const {
  headingFontFamily,
  baseFontFamily,
  headingFontSizes,
  headingLineHeight,
  baseFontSize,
  baseLineHeight,
  baseFontWeight,
  baseFontStyle,
  smallFontSize,
  linkColor,
  linkColorHover,
  accentColor,
  textColor
} = TYPOGRAPHY_DEFAULTS

export const Heading = styled('div').attrs<HeadingProps>(
  ({ level }: { level: number }) => ({
    role: 'heading',
    'aria-level': level || 1
  })
)<HeadingProps>`
  margin: ${({ level }) => (level !== 1 ? '2.75rem 0 1rem' : '0 0 1rem')};
  font-family: ${headingFontFamily};
  font-size: ${({ level }) => headingFontSizes[(level as number) - 1]};
  font-weight: ${baseFontWeight};
  font-style: ${baseFontStyle};
  line-height: ${headingLineHeight};
`

export const Link = styled('a')<{}>`
  display: inline-block;
  color: ${linkColor};
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    color: ${linkColorHover};
  }
`

export const Text = styled('p')<TextProps>`
  margin-bottom: 1.25em;
  font-family: ${baseFontFamily};
  font-size: ${baseFontSize};
  font-weight: ${baseFontWeight};
  font-style: ${baseFontStyle};
  line-height: ${baseLineHeight};
  opacity: ${({ transparent }) => (transparent ? '0.65' : '1')};
  color: ${({ accent }) => (accent ? accentColor : textColor)};
`

export const Small = styled(Text)<TextProps>`
  margin-bottom: 0;
  font-size: ${smallFontSize};
`
