const withOffline = require('next-offline')
const urlsToCache = [
  '/',
  'https://use.typekit.net/jzw6tzs.css'
]
const nextConfig = {
  env: {
    LHCI_GITHUB_APP_TOKEN: process.env.LHCI_GITHUB_APP_TOKEN,
  },
  target: 'serverless',
  exportTrailingSlash: true,
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  },
  transformManifest: manifest => urlsToCache.concat(manifest),
  workboxOpts: {
    swDest: 'static/service-worker.js',
  }
}

module.exports = withOffline(nextConfig)
