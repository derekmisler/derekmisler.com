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
    "object-curly-spacing": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "comma-dangle": ["error", "never"],
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "no-param-reassign": ["error", { "props": false }],
    "no-restricted-syntax": ["off", "ForInStatement"],
    "no-console": "error",
    "camelcase": "error",
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "semi": ["error", "never"]
  }
};
