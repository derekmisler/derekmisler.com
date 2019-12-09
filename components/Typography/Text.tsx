import styled from 'styled-components'
import { TextProps } from 'types/typography'
import { TYPOGRAPHY_DEFAULTS } from 'styles/typography'
import { LAYOUT_DEFAULTS } from 'styles/layout'

const {
  baseFontFamily,
  textFontSize,
  baseLineHeight,
  baseFontWeight,
  boldFontWeight,
  baseFontStyle,
  accentColor,
  textColor
} = TYPOGRAPHY_DEFAULTS

const { spacing, opacity, mediaQueries } = LAYOUT_DEFAULTS

export const Text = styled.p.attrs<TextProps>(({ inline }) => ({
  as: inline ? 'span' : 'p'
})) <TextProps>`
  margin-bottom: ${spacing.medium};
  font-family: ${baseFontFamily};
  font-size: ${textFontSize.mobile};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  line-height: ${({ inline }) => (inline ? 1 : baseLineHeight)};
  font-weight: ${({ bold }) => (bold ? boldFontWeight : baseFontWeight)};
  font-style: ${baseFontStyle};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ accent }) => (accent ? accentColor : textColor)};
  @media ${mediaQueries.desktop} {
    font-size: ${textFontSize.desktop};
    text-align: ${({ textAlignDesktop }) => textAlignDesktop};
  }
`
