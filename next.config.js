const withOffline = require('next-offline')
const urlsToCache = [
  '/',
  'https://use.typekit.net/jzw6tzs.css'
]
const nextConfig = {
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
