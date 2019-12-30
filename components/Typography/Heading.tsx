import styled from 'styled-components'
import { StyledComponentProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  headingFontFamily,
  headingFontSizes,
  headingLineHeights,
  headingFontWeights,
  headingLetterSpacing,
  baseFontStyle
} = TYPOGRAPHY_DEFAULTS

const { mediaQueries } = LAYOUT_DEFAULTS

export interface StyledHeadingProps extends StyledComponentProps {
  accent?: boolean
  textAlign?: string
  level?: number
}

export const Heading = styled.div.attrs<StyledHeadingProps>(
  ({ level = 1, as }) => ({
    role: as ? '' : 'heading',
    'aria-level': level,
    as: `h${level}`
  })
) <StyledHeadingProps>`
  text-align: ${({ textAlign = 'left' }) => textAlign};
  font-family: ${headingFontFamily};
  font-style: ${baseFontStyle};
  font-weight: ${({ level }) => headingFontWeights[(level as number) - 1]};
  line-height: ${({ level }) => headingLineHeights[(level as number) - 1]};
  font-size: ${({ level }) => headingFontSizes.mobile[(level as number) - 1]};
  letter-spacing: ${({ level }) => headingLetterSpacing[(level as number) - 1]};
  column-span: all;
  color: ${({ theme, accent }) => (accent ? theme.accent : undefined)};

  @media ${mediaQueries.desktop} {
    font-size: ${({ level }) => headingFontSizes.desktop[(level as number) - 1]};
  }
`
