import { useReducer, Dispatch } from 'react'
import { themeReducer, initialThemeState } from 'utils/reducers'
import { ThemeProps, ThemeActionProps } from 'types'

type UseThemeProps = [
  ThemeProps,
  Dispatch<ThemeActionProps>
]

export const useTheme = (initialTheme = initialThemeState): UseThemeProps => {
  const [state, dispatch] = useReducer(themeReducer, initialTheme)
  const { theme } = state
  return [theme, dispatch]
}
