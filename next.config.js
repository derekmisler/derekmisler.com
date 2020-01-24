const withOffline = require('next-offline')

const nextConfig = {
  exportTrailingSlash: true,
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  }
}

module.exports = withOffline(nextConfig);
