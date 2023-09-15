module.exports = {
  env: {
    browser: false,
    es2021: true,
    node: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script',
      }
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
      ecmaVersion: 'latest',
    sourceType: 'module',
      project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}

