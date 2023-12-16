'use client'

import { useState, useEffect } from 'react'
import { themes, type ThemeStateProps } from '@/styles/colors'

enum ThemeActionTypes {
  Light = 'light',
  Dark = 'dark'
}

type UseThemeProps = [ThemeStateProps, Function]

export const useTheme = (): UseThemeProps => {
  const [isDarkMode, setDarkMode] = useState(true)
  const [theme, setTheme] = useState(themes[ThemeActionTypes.Dark])

  const now = new Date()
  const hour = now.getHours()
  const outsideOfWorkingHours = hour < 9 || hour >= 17

  useEffect(() => {
    setDarkMode(outsideOfWorkingHours)
    setTheme(themes[outsideOfWorkingHours ? ThemeActionTypes.Dark : ThemeActionTypes.Light])
  }, [outsideOfWorkingHours])

  const toggleTheme = () => {
    setDarkMode(prev => !prev)
    setTheme(themes[isDarkMode ? ThemeActionTypes.Light : ThemeActionTypes.Dark])
  }

  return [{ theme, isDarkMode }, toggleTheme]
}
