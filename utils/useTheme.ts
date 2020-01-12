import { useState } from 'react'
import { themes, ThemeStateProps } from 'styles'
import { useDarkMode } from 'utils/useDarkMode'

enum ThemeActionTypes {
  Light = 'light',
  Dark = 'dark'
}

type UseThemeProps = [ThemeStateProps, Function]

export const useTheme = (): UseThemeProps => {
  const defaultDarkMode = useDarkMode()

  const [isDarkMode, setDarkMode] = useState(defaultDarkMode)
  const [theme, setTheme] = useState(themes[defaultDarkMode ? ThemeActionTypes.Dark : ThemeActionTypes.Light])

  const toggleTheme = (activated: boolean) => {
    setDarkMode(!activated)
    setTheme(themes[activated ? ThemeActionTypes.Light : ThemeActionTypes.Dark])
  }

  return [{ theme, isDarkMode }, toggleTheme]
}
