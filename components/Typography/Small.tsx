import { memo, FC } from 'react'
import styled from 'styled-components'
import { TextProps } from 'types'
import { TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'
import { useTheme } from 'utils/useTheme'

const { smallFontSize } = TYPOGRAPHY_DEFAULTS

const { opacity, mediaQueries } = LAYOUT_DEFAULTS

interface StyledSmallProps extends TextProps {
  transparent?: boolean
  textColor: string
}

export const StyledSmall = styled.small<StyledSmallProps>`
  font-size: ${smallFontSize.mobile};
  opacity: ${({ transparent }) => (transparent ? opacity : '1')};
  color: ${({ textColor }) => textColor};
  @media ${mediaQueries.desktop} {
    font-size: ${smallFontSize.desktop};
  }
`

export const Small: FC<TextProps> = memo(({ accent, ref, as, ...rest }) => {
  const [{ accent: accentColor }] = useTheme()
  const textColor = accent ? accentColor : 'inherit'
  return <StyledSmall {...rest} textColor={textColor} />
})
