import styled from 'styled-components'
import { TextProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  baseFontFamily,
  baseFontSize,
  baseLineHeight,
  baseFontWeight,
  boldFontWeight,
  baseFontStyle,
  minColWidth
} = TYPOGRAPHY_DEFAULTS

const { spacing, opacity, mediaQueries } = LAYOUT_DEFAULTS

export const Text = styled.p.attrs<TextProps>(({ inline }) => ({
  as: inline ? 'span' : 'p'
}))<TextProps>`
  margin-bottom: ${spacing.medium};
  font-family: ${baseFontFamily};
  font-size: ${baseFontSize};
  word-wrap: break-word;
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  line-height: ${({ inline }) => (inline ? 1 : baseLineHeight)};
  font-weight: ${({ bold }) => (bold ? boldFontWeight : baseFontWeight)};
  font-style: ${baseFontStyle};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ theme, accent }) => (accent ? theme.accent : undefined)};

  @media ${mediaQueries.desktop} {
    text-align: ${({ textAlignDesktop }) => textAlignDesktop};
  }
  @media ${mediaQueries.fullHeight} {
    columns: ${({ columns = 1 }) => `${columns} ${minColWidth}`};
    column-gap: ${({ columns }) => columns ? spacing.large : undefined};
  }
`
