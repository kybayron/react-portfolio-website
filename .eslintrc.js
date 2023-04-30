module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'airbnb',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: [
      'react',
      'import',
      '@typescript-eslint'
    ],
    rules: {
      "import/extensions": "off",
      'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
};
  