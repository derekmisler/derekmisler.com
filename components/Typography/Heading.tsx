import styled from 'styled-components'
import { HeadingProps } from 'types/typography'
import { TYPOGRAPHY_DEFAULTS } from 'styles/typography'
import { LAYOUT_DEFAULTS } from 'styles/layout'
import { generateShadow } from 'utils/generateShadow'
import { gray } from 'styles/colors'

const {
  baseFontFamily,
  headingFontFamily,
  headingFontSizes,
  headingLineHeight,
  headingFontWeight,
  boldFontWeight,
  baseFontStyle,
  accentFontStyle
} = TYPOGRAPHY_DEFAULTS

const { spacing, mediaQueries } = LAYOUT_DEFAULTS

export const Heading = styled.div.attrs<HeadingProps>(({ level, as }) => ({
  role: as ? '' : 'heading',
  'aria-level': level || 1,
  as: `h${level}`
})) <HeadingProps>`
  text-align: ${({ textAlign = 'left' }) => textAlign};
  margin: ${({ level }) =>
    level !== 1
      ? `${spacing.small} 0 ${spacing.medium}`
      : `0 0 ${spacing.medium}`};
  font-family: ${({ level }) => level === 1 ? headingFontFamily : baseFontFamily};
  font-weight: ${({ level }) => level === 1 ? headingFontWeight : boldFontWeight};
  font-style: ${({ level }) => level === 1 ? baseFontStyle : accentFontStyle};
  line-height: ${headingLineHeight};
  font-size: ${({ level }) => headingFontSizes.mobile[(level as number) - 1]};
  @media ${mediaQueries.desktop} {
    font-size: ${({ level }) => headingFontSizes.desktop[(level as number) - 1]};
  }
  ${({ level }) => level === 1 && generateShadow(gray, gray, 'text')}
`
