import { useReducer, MouseEventHandler } from 'react'
import { themeReducer } from 'utils/reducers'
import { ThemeProps, ThemeActionTypes } from 'types'
import { themes } from 'styles/colors'

type UseThemeProps = [
  ThemeProps,
  MouseEventHandler
]

export const useTheme = (): UseThemeProps => {
  const initialThemeState = {
    isDarkMode: true,
    theme: themes[ThemeActionTypes.Dark]
  }
  const [{ theme, isDarkMode }, dispatch] = useReducer(themeReducer, initialThemeState)
  const toggleTheme = () => {
    dispatch({ type: isDarkMode ? ThemeActionTypes.Light : ThemeActionTypes.Dark })
  }
  return [theme, toggleTheme]
}
