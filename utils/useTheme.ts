import { useReducer } from 'react'
import { themeReducer, ThemeActionTypes } from 'utils/reducers'
import { themes, ThemeStateProps } from 'styles'
import { useDarkMode } from 'utils/useDarkMode'

type UseThemeProps = [ThemeStateProps, Function]

export const useTheme = (): UseThemeProps => {
  const toggleTheme = (activated: boolean) => {
    dispatch({
      type: activated ? ThemeActionTypes.Light : ThemeActionTypes.Dark
    })
  }

  const defaultDarkMode = useDarkMode()

  const initialThemeState = {
    isDarkMode: defaultDarkMode,
    theme: themes[defaultDarkMode ? ThemeActionTypes.Dark : ThemeActionTypes.Light]
  }
  const [theme, dispatch] = useReducer(
    themeReducer,
    initialThemeState
  )

  return [theme, toggleTheme]
}
