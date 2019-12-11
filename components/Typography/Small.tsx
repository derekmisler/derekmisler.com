import { useReducer, memo, FC } from 'react'
import styled from 'styled-components'
import { TextProps } from 'types'
import { TYPOGRAPHY_DEFAULTS, LAYOUT_DEFAULTS } from 'styles'
import { themeReducer, initialThemeState } from 'utils/reducers'

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
  const [state] = useReducer(themeReducer, initialThemeState)
  const textColor = accent ? state.theme.accent : 'inherit'
  return <StyledSmall {...rest} textColor={textColor} />
})
