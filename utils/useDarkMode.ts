import { useState, useEffect } from 'react'

const mediaQueryMatcher = (queryToMatch: string): boolean => {
  if (typeof window !== 'object') return false
  if (!window.matchMedia) return false

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

export const useDarkMode = (): boolean => {
  if (mediaQueryMatcher('(prefers-color-scheme: dark)')) return true

  const now: Date = new Date()
  const hour: number = now.getHours()
  if (hour < 7 || hour >= 17) return true
  return false
}
