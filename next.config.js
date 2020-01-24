const withOffline = require('next-offline')

const nextConfig = {
  distDir: 'dist',
  target: 'serverless',
  exportTrailingSlash: true,
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  }
}

module.exports = withOffline(nextConfig);
