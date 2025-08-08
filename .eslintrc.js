module.exports = {
  env: {
    browser: true, // ブラウザのグローバル変数を使用可能に
    es2021: true, // ES2021の構文を有効化
    node: true, // Node.jsのグローバル変数を使用可能に
  },
  extends: [
    'eslint:recommended', // ESLintの推奨ルール
    'plugin:react/recommended', // React推奨のルール
    'plugin:react-hooks/recommended', // React Hooks推奨のルール
    'plugin:@typescript-eslint/recommended', // TypeScript推奨のルール
    'prettier',
  ],
  parser: '@typescript-eslint/parser', // TypeScriptパーサーを使用
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // JSXを有効化
    },
    ecmaVersion: 'latest', // 最新のECMAScript機能を有効化
    sourceType: 'module', // ECMAScriptモジュールを使用
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    // カスタムルール
    'react/react-in-jsx-scope': 'off', // React17以降は不要
    'react/prop-types': 'off', // TypeScriptを使用する場合は不要
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 関数の戻り値の型を明示的に指定する必要なし
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 未使用変数をエラーに
  },
  settings: {
    react: {
      version: 'detect', // Reactのバージョンを自動検出
    },
  },
};
