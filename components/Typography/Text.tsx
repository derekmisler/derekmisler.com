import { SFC, useContext, memo } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { TextProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  baseFontFamily,
  textFontSize,
  baseLineHeight,
  baseFontWeight,
  boldFontWeight,
  baseFontStyle
} = TYPOGRAPHY_DEFAULTS

const { spacing, opacity, mediaQueries } = LAYOUT_DEFAULTS

export interface StyledTextProps extends TextProps {
  textColor: string
}

export const StyledText = styled.p.attrs<StyledTextProps>(({ inline }) => ({
  as: inline ? 'span' : 'p'
}))<StyledTextProps>`
  margin-bottom: ${spacing.medium};
  font-family: ${baseFontFamily};
  font-size: ${textFontSize.mobile};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  line-height: ${({ inline }) => (inline ? 1 : baseLineHeight)};
  font-weight: ${({ bold }) => (bold ? boldFontWeight : baseFontWeight)};
  font-style: ${baseFontStyle};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ textColor, inline }) => inline ? 'inherit' : textColor};
  mix-blend-mode: difference;
  @media ${mediaQueries.desktop} {
    font-size: ${textFontSize.desktop};
    text-align: ${({ textAlignDesktop }) => textAlignDesktop};
  }
`

export const Text: SFC<TextProps> = memo(({ accent, ref, as, ...rest }) => {
  const { accent: accentColor, text } = useContext(ThemeContext)
  const textColor = accent ? accentColor : text
  return <StyledText {...rest} textColor={textColor} />
})
