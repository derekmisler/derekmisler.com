'use client'

import { useState, useEffect } from 'react'
import { themes, type ThemeStateProps } from '@/styles/colors'

export const useTheme = (): ThemeStateProps => {
  const [isDarkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const now = new Date()
    const hour = now.getHours()
    const outsideOfWorkingHours = hour < 9 || hour >= 17

    const systemSettingDark = !window.matchMedia("(prefers-color-scheme: light)").matches;
    setDarkMode(systemSettingDark || outsideOfWorkingHours)
  }, [])

  const theme = themes[isDarkMode  ? 'dark' : 'light']

  return { theme, isDarkMode }
}
