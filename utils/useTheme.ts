import { useReducer, MouseEventHandler } from 'react'
import { themeReducer, ThemeActionTypes } from 'utils/reducers'
import { themes, ThemeProps } from 'styles'

type UseThemeProps = [ThemeProps, MouseEventHandler]

export const useTheme = (): UseThemeProps => {
  const initialThemeState = {
    isDarkMode: true,
    theme: themes[ThemeActionTypes.Dark]
  }
  const [{ theme, isDarkMode }, dispatch] = useReducer(
    themeReducer,
    initialThemeState
  )
  const toggleTheme = () => {
    dispatch({
      type: isDarkMode ? ThemeActionTypes.Light : ThemeActionTypes.Dark
    })
  }
  return [theme, toggleTheme]
}
