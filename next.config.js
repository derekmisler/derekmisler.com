const withOffline = require('next-offline')
const urlsToCache = [
  '/',
  'https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/l?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n6&v=3',
  'https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/d?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n6&v=3',
  'https://use.typekit.net/af/8a200c/00000000000000003b9b204a/27/a?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n6&v=3',
  'https://use.typekit.net/af/550c82/00000000000000003b9b2052/27/l?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n5&v=3',
  'https://use.typekit.net/af/550c82/00000000000000003b9b2052/27/d?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n5&v=3',
  'https://use.typekit.net/af/550c82/00000000000000003b9b2052/27/a?primer=7fa3915bdafdf03041871920a205bef951d72bf64dd4c4460fb992e3ecc3a862&fvd=n5&v=3'
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
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxAgeSeconds: 24 * 60 * 60
          }
        }
      }
    ]
  }
}

module.exports = withOffline(nextConfig)
