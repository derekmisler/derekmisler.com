import { useReducer, MouseEventHandler } from 'react'
import { themeReducer, ThemeActionTypes } from 'utils/reducers'
import { themes, ThemeProps } from 'styles'
import { setDarkMode } from 'utils/setDarkMode'

type UseThemeProps = [ThemeProps, MouseEventHandler]

export const useTheme = (): UseThemeProps => {
  const defaultDarkMode = setDarkMode()

  const initialThemeState = {
    isDarkMode: defaultDarkMode,
    theme: themes[defaultDarkMode ? ThemeActionTypes.Dark : ThemeActionTypes.Light]
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
