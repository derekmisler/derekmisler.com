import styled from 'styled-components'
import { HeadingProps, TextProps, LinkProps } from 'types/typography'
import { TYPOGRAPHY_DEFAULTS } from 'styles/typography'
import { LAYOUT_DEFAULTS } from 'styles/layout'

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

const { spacing, borderRadius, opacity, borderColor } = LAYOUT_DEFAULTS

export const Heading = styled.div.attrs<HeadingProps>(({ level, as }) => ({
  role: as ? '' : 'heading',
  'aria-level': level || 1
}))<HeadingProps>`
  margin: ${({ level }) =>
    level !== 1
      ? `${spacing.large} 0 ${spacing.medium}`
      : `0 0 ${spacing.medium}`};
  font-family: ${headingFontFamily};
  font-size: ${({ level }) => headingFontSizes[(level as number) - 1]};
  font-weight: ${baseFontWeight};
  font-style: ${baseFontStyle};
  line-height: ${headingLineHeight};
`

export const Link = styled.a<LinkProps>`
  display: inline-block;
  color: ${linkColor};
  border: ${({ variant }) =>
    variant === 'text' ? '0px' : `1px solid ${linkColor}`};
  text-decoration: none;
  padding: ${({ variant }) =>
    variant === 'text' ? '0px' : `${spacing.small} ${spacing.medium}`};
  border-radius: ${borderRadius};
  width: fit-content;
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    color: ${linkColorHover};
    border-color: ${linkColorHover};
  }
`

export const Text = styled.p<TextProps>`
  margin-bottom: ${spacing.medium};
  font-family: ${baseFontFamily};
  font-size: ${baseFontSize};
  font-weight: ${baseFontWeight};
  font-style: ${baseFontStyle};
  line-height: ${baseLineHeight};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ accent }) => (accent ? accentColor : textColor)};
`

export const Small = styled.small<TextProps>`
  margin-bottom: 0;
  font-size: ${smallFontSize};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ accent }) => (accent ? accentColor : textColor)};
`

export const SubHeading = styled(Small)<TextProps>`
  border-top: 1px solid ${borderColor};
  display: block;
  padding-top: ${spacing.large};
  margin-top: ${spacing.large};
  opacity: ${opacity};
`
