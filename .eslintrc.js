const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: 'airbnb', // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6
  },
  rules: {
    camelcase: ERROR,
    semi: [ERROR, 'never'],
    'no-alert': OFF,
    'indent': [ERROR, 2],
    'class-methods-use-this': OFF,
    'arrow-parens': [ERROR, 'as-needed'],
    'no-underscore-dangle': OFF,
    'no-unreachable': ERROR,
    'comma-dangle': [ERROR, 'never'],
    'object-curly-newline': [ERROR, { consistent: true }],
    'import/prefer-default-export': OFF,
    'import/no-anonymous-default-export': [ERROR, {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: false,
      allowLiteral: false,
      allowObject: false
    }],
    'import/no-unresolved': OFF,
    'import/extensions': OFF,
    'import/no-extraneous-dependencies': OFF,
    'no-param-reassign': OFF,
    'no-restricted-syntax': ['off', 'ForInStatement'],
    'no-console': ERROR,
    'no-confusing-arrow': [ERROR, { allowParens: true }],
    'max-len': [OFF, {
      code: 150,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreRegExpLiterals: true
    }],
    'prefer-destructuring': [ERROR, {
      object: true,
      array: false
    }],
    'react/jsx-filename-extension': OFF,
    'react/react-in-jsx-scope': OFF,
    'jsx-quotes': [ERROR, 'prefer-single'],
    'jsx-a11y/label-has-for': [ERROR, {
      required: { every: ['id'] },
      allowChildren: false
    }],
    'jsx-a11y/anchor-is-valid': [ERROR, {
      components: []
    }],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': OFF
  },
  globals: {
    __ENV__: false,
    __DEV__: false,
    __STAGE__: false,
    __PROD__: false,
    __TEST__: false
  }
}
