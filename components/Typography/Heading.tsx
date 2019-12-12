import { memo, FC, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'
import { generateShadow } from 'utils/generateShadow'
import { StyledComponentProps } from 'types'

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

export interface HeadingProps extends StyledComponentProps {
  textAlign?: string
  level?: number
}
export interface StyledHeadingProps extends HeadingProps {
  shadow: string
  shadowHover: string
  backgroundColor: string
}

export const StyledHeading = styled.div.attrs<StyledHeadingProps>(({ level, as }) => ({
  role: as ? '' : 'heading',
  'aria-level': level || 1,
  as: `h${level}`
})) <StyledHeadingProps>`
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
  ${({ level, shadow, shadowHover, backgroundColor }) => level === 1 && generateShadow(shadow, shadowHover, backgroundColor, 'text')}
`


export const Heading: FC<HeadingProps> = memo(({ ref, as, ...rest }) => {
  const { shadow, background } = useContext(ThemeContext)
  return (
    <StyledHeading
      {...rest}
      shadow={shadow}
      shadowHover={shadow}
      backgroundColor={background}
    />
  )
})
