module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  globals: {
    initSense: 'readonly',
    React: false,
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'prettier',
    'prettier/prettier',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    'react/require-default-props': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
        ts: 'never',
        jsx: 'never',
        js: 'never',
        vue: 'never',
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
  },
}
