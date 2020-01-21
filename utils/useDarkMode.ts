import { useState } from 'react'

export const useDarkMode = (): boolean => {
  const [isNight, setIsNight] = useState(false)

  setInterval(() => {
    const now: Date = new Date()
    const hour: number = now.getHours()
    setIsNight(hour < 9 || hour >= 17)
  }, 60000)

  return isNight
}
