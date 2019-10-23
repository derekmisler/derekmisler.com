interface EnvTypes {
  __PROD__: boolean
}

export const env: EnvTypes = {
  __PROD__: process.env.NODE_ENV === 'production'
}

export default env
