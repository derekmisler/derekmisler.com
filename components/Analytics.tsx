import React from 'react'
import { useRouter } from 'next/router'
import { initGA, logPageView } from 'utils/analytics'

interface Window {
  GA_INITIALIZED: boolean
}
declare var window: Window

const Analytics: React.FC<{}> = () => {
  const router = useRouter()
  React.useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }

    logPageView()
    router.events.on('routeChangeComplete', logPageView)

    return () => {
      router.events.off('routeChangeComplete', logPageView)
    }
  }, [])

  return null
}

export default Analytics
