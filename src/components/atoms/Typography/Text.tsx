import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES, TextProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from '@/styles'

const { minColWidth } = TYPOGRAPHY_DEFAULTS

const { spacing, opacity, mediaQueries } = LAYOUT_DEFAULTS

export const Text = styled.p.attrs<TextProps>(({ inline }) => ({
  as: inline ? 'span' : 'p'
}))<TextProps>`
  ${DEFAULT_TEXT_STYLES}
  padding-top: ${spacing.medium};
  margin-bottom: ${spacing.small};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  color: ${({ theme, accent }) => (accent ? theme.accent : undefined)};

  @media ${mediaQueries.desktop} {
    margin-bottom: ${spacing.large};
    text-align: ${({ textAlignDesktop }) => textAlignDesktop};
  }
  @media ${mediaQueries.fullHeight} {
    columns: ${({ columns = 1 }) => `${columns} ${minColWidth}`};
    column-gap: ${({ columns }) => (columns ? spacing.large : undefined)};
  }
`
