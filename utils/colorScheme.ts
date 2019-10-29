export const setDarkMode = () => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches
  const isNotSpecified = window.matchMedia(
    '(prefers-color-scheme: no-preference)'
  ).matches
  const hasNoSupport = !isDarkMode && !isLightMode && !isNotSpecified

  if (isDarkMode) return true
  if (isLightMode) return false
  if (isNotSpecified || hasNoSupport) {
    const now = new Date()
    const hour: number = now.getHours()
    if (hour < 4 || hour >= 16) {
      return true
    }
  }
}
