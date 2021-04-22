import styled from 'styled-components'
import { StyledComponentProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  headingFontFamily,
  headingFontSizes,
  headingLineHeights,
  headingFontWeights,
  headingLetterSpacing,
  baseFontStyle,
  headingLeftMargin
} = TYPOGRAPHY_DEFAULTS

const { mediaQueries, spacing } = LAYOUT_DEFAULTS

export interface StyledHeadingProps extends StyledComponentProps {
  accent?: boolean
  textAlign?: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled.div.attrs<StyledHeadingProps>(({ level, as }) => ({
  role: as ? '' : 'heading',
  'aria-level': level,
  as: `h${level}`
}))<StyledHeadingProps>`
  text-align: ${({ textAlign = 'left' }) => textAlign};
  font-family: ${headingFontFamily};
  font-style: ${baseFontStyle};
  font-weight: ${({ level }) => headingFontWeights[level - 1]};
  line-height: ${({ level }) => headingLineHeights[level - 1]};
  font-size: ${({ level }) => headingFontSizes.mobile[level - 1]};
  letter-spacing: ${({ level }) => headingLetterSpacing[level - 1]};
  column-span: all;
  color: ${({ theme, accent }) => (accent ? theme.accent : undefined)};
  margin: ${({ level }) => (level > 2 ? `${spacing.medium} 0` : 0)};
  margin-left: ${({ level }) => headingLeftMargin.mobile[level - 1]};

  @media ${mediaQueries.desktop} {
    margin-left: ${({ level }) => headingLeftMargin.desktop[level - 1]};
    font-size: ${({ level }) => headingFontSizes.desktop[level - 1]};
  }
`
