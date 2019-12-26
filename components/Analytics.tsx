import { useEffect, SFC, memo } from 'react'
import { useRouter } from 'next/router'
import { initGA, logPageView } from 'utils/analytics'

interface Window {
  GA_INITIALIZED: boolean
}
declare var window: Window

export const Analytics: SFC<{}> = memo(() => {
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
})
