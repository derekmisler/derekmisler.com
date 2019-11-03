import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { initGA, logPageView } from 'utils/analytics'

interface Window {
  GA_INITIALIZED: boolean
}
declare var window: Window

export const Analytics: React.FC<{}> = () => {
  const router = useRouter()
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }

    logPageView(router.pathname)
    router.events.on('routeChangeComplete', logPageView)

    return () => {
      router.events.off('routeChangeComplete', logPageView)
    }
  }, [])

  return null
}
