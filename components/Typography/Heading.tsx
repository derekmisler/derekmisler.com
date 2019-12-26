import { memo, SFC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { StyledComponentProps, TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'

const {
  headingFontFamily,
  headingFontSizes,
  headingLineHeight,
  headingFontWeight,
  boldFontWeight,
  baseFontStyle
} = TYPOGRAPHY_DEFAULTS

const { spacing, mediaQueries } = LAYOUT_DEFAULTS

export interface HeadingProps extends StyledComponentProps {
  textAlign?: string
  level?: number
}
export interface StyledHeadingProps extends HeadingProps {
  shadow: string
  backgroundColor: string
}

export const StyledHeading = styled.div.attrs<StyledHeadingProps>(
  ({ level = 1, as }) => ({
    role: as ? '' : 'heading',
    'aria-level': level,
    as: `h${level}`
  })
) <StyledHeadingProps>`
  text-align: ${({ textAlign = 'left' }) => textAlign};
  margin: ${({ level }) =>
    level !== 1
      ? `${spacing.small} 0 ${spacing.medium}`
      : `0 0 ${spacing.medium}`};
  font-family: ${headingFontFamily};
  font-weight: ${({ level = 1 }) =>
    level <= 2
      ? headingFontWeight
      : boldFontWeight};
  font-style: ${baseFontStyle};
  line-height: ${headingLineHeight};
  font-size: ${({ level }) => headingFontSizes.mobile[(level as number) - 1]};
  @media ${mediaQueries.desktop} {
    font-size: ${({ level }) =>
    headingFontSizes.desktop[(level as number) - 1]};
  }
`

export const Heading: SFC<HeadingProps> = memo(({ ref, as, ...rest }) => {
  const { shadow, background } = useContext(ThemeContext)
  return (
    <StyledHeading
      {...rest}
      shadow={shadow}
      backgroundColor={background}
    />
  )
})
