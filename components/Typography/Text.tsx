import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, TextProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  baseLineHeight,
  baseFontWeight,
  boldFontWeight,
  minColWidth
} = TYPOGRAPHY_DEFAULTS

const { spacing, opacity, mediaQueries } = LAYOUT_DEFAULTS

export const Text = styled.p.attrs<TextProps>(({ inline }) => ({
  as: inline ? 'span' : 'p'
}))<TextProps>`
  ${DEFAULT_TEXT_STYLES}
  margin-bottom: ${spacing.medium};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  line-height: ${({ inline }) => (inline ? 1 : baseLineHeight)};
  font-weight: ${({ bold }) => (bold ? boldFontWeight : baseFontWeight)};
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
