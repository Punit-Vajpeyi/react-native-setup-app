module.exports = {
  root: true,
  extends: ['@react-native', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^React$' },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // e.g. fs, path
          'external', // e.g. react, react-native
          'internal', // your aliases like @components
          'sibling', // e.g. imports from sibling files
        ],
        pathGroups: [],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc', // Order imports alphabetically
          caseInsensitive: true,
        },
        'newlines-between': 'always', // Ensure a new line between import groups
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: true,
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
};
