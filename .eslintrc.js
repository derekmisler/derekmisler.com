module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "arrow-parens": ["error", "as-needed"],
    "no-underscore-dangle": 0,
    "comma-dangle": ["error", "never"],
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "no-param-reassign": ["error", { "props": false }],
    "no-restricted-syntax": ["off", "ForInStatement"],
    "no-console": "error",
    "camelcase": "error",
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "semi": ["error", "never"],
    "react/no-unknown-property": [2, { "ignore": ["charset", "http-equiv"] }]
  }
}
