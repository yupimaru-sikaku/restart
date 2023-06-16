module.exports = {
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  printWidth: 120,

  // @ianvs/prettier-plugin-sort-imports
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  // 具体的なソート方法
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/components/(.*)$',
    '^@/app/(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.4',
};
