import { useState } from 'react'
import { themes, ThemeStateProps } from 'styles'

enum ThemeActionTypes {
  Light = 'light',
  Dark = 'dark'
}

type UseThemeProps = [ThemeStateProps, Function]

export const useTheme = (): UseThemeProps => {
  const now: Date = new Date()
  const hour: number = now.getHours()
  const defaultDarkMode = hour < 9 || hour >= 17

  const [isDarkMode, setDarkMode] = useState(defaultDarkMode)
  const [theme, setTheme] = useState(themes[defaultDarkMode ? ThemeActionTypes.Dark : ThemeActionTypes.Light])

  const toggleTheme = (activated: boolean) => {
    setDarkMode(!activated)
    setTheme(themes[activated ? ThemeActionTypes.Light : ThemeActionTypes.Dark])
  }

  return [{ theme, isDarkMode }, toggleTheme]
}
