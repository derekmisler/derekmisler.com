import { useState, useEffect } from 'react'

const mediaQueryMatcher = (queryToMatch: string): boolean => {
  if (typeof window !== 'object') return true
  if (!window.matchMedia) return true

  const [matches, setMatches] = useState(window.matchMedia(queryToMatch).matches)

  useEffect(() => {
    const media = window.matchMedia(queryToMatch)
    if (media.matches !== matches) setMatches(media.matches)
    const listener = () => setMatches(media.matches)
    media.addListener(listener)
    return () => media.removeListener(listener)
  }, [matches, queryToMatch])

  return matches
}

export const setDarkMode = (): boolean => {
  const isDark = mediaQueryMatcher('(prefers-color-scheme: dark)')
  const isLight = mediaQueryMatcher('(prefers-color-scheme: light)')
  if (isDark) return true
  if (isLight) return false

  const now: Date = new Date()
  const hour: number = now.getHours()
  if (hour < 7 || hour >= 17) return true
  return false
}
