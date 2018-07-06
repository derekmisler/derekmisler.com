const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    camelcase: ERROR,
    semi: [ERROR, 'never'],
    'indent': [ERROR, 2],
    'arrow-parens': [ERROR, 'as-needed'],
    'no-underscore-dangle': OFF,
    'no-unreachable': ERROR,
    'comma-dangle': [ERROR, 'never'],
    'object-curly-newline': [ERROR, { consistent: true }],
    'no-console': ERROR,
    'prefer-destructuring': [ERROR, {
      object: true,
      array: false
    }],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'react/react-in-jsx-scope': OFF
  }
}
