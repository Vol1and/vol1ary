module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    browser: true,
    es6: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
    "react-app",
    "react-app/jest"
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    }
  }
}
