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
  accentFontWeight,
  baseFontStyle,
  accentFontStyle,
  smallFontSize,
  baseLetterSpacing,
  linkColor,
  linkColorHover,
  accentColor,
  textColor
} = TYPOGRAPHY_DEFAULTS

const {
  spacing,
  borderRadius,
  opacity,
  borderColor,
  borderStyle,
  backgroundColor
} = LAYOUT_DEFAULTS

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
  font-size: inherit;
  font-weight: ${accentFontWeight};
  font-style: ${accentFontStyle};
  border: ${({ variant }) =>
    variant === 'text' ? '0px' : `${borderStyle} ${linkColor}`};
  text-decoration: none;
  padding: ${({ variant }) =>
    variant === 'text' ? '0px' : `${spacing.small} ${spacing.medium}`};
  border-radius: ${borderRadius};
  width: fit-content;
  letter-spacing: ${baseLetterSpacing};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    color: ${({ variant }) =>
      variant === 'text' ? linkColorHover : backgroundColor};
    background-color: ${({ variant }) =>
      variant === 'text' ? 'transparent' : linkColorHover};
    border-color: ${linkColorHover};
  }
`

export const Text = styled.p<TextProps>`
  margin-bottom: ${spacing.medium};
  font-family: ${baseFontFamily};
  font-size: ${baseFontSize};
  font-weight: ${({ accent }) => (accent ? accentFontWeight : baseFontWeight)};
  font-style: ${({ accent }) => (accent ? accentFontStyle : baseFontStyle)};
  line-height: ${baseLineHeight};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ accent }) => (accent ? accentColor : textColor)};
  letter-spacing: ${({ accent }) => (accent ? baseLetterSpacing : '0')};
`

export const Small = styled.small<TextProps>`
  margin-bottom: 0;
  font-size: ${smallFontSize};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ accent }) => (accent ? accentColor : 'inherit')};
`

export const SubHeading = styled(Small)<TextProps>`
  border-top: ${borderStyle} ${borderColor};
  display: block;
  padding-top: ${spacing.large};
  margin-top: ${spacing.large};
  opacity: ${opacity};
`
