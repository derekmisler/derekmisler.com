var resume = require('../src/constants/resume')

const config = {
  env: process.env.NODE_ENV || 'development',
  profile: resume.profile,
  location: resume.location,
  contact: resume.contact
}

config.compilerOptions = {
  presets: [
    'react',
    [
      'env',
      {
        targets: {
          browsers: ['last 2 versions']
        },
        modules: false
      }
    ]
  ],
  plugins: [ 'transform-object-rest-spread' ]
}

config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production'
}

module.exports = config
