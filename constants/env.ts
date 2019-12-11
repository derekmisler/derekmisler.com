export const env: { __PROD__: boolean } = {
  __PROD__: process.env.NODE_ENV === 'production'
}

export default env
