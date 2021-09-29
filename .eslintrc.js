module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 0,
    'import/newline-after-import': 0,
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/state-in-constructor': 'off',
    'react/no-unused-state': 'off',
    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-param-reassign': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prefer-stateless-function': 'off',
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'react/jsx-curly-newline': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
  },
};
