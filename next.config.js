const withOffline = require('next-offline')

const nextConfig = {
  target: 'serverless',
  exportTrailingSlash: true,
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  }
}

module.exports = withOffline(nextConfig);
