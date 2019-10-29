export const setDarkMode = (): boolean => {
  const isDark: boolean = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
  const isLight: boolean = window.matchMedia('(prefers-color-scheme: light)')
    .matches

  if (isDark) return true
  if (isLight) return false
  const now: Date = new Date()
  const hour: number = now.getHours()
  if (hour < 4 || hour >= 16) {
    return true
  }
  return false
}
