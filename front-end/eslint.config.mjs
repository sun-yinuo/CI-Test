// @ts-check
import antfu from '@antfu/eslint-config'

import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  await antfu({
    name: 'laslog/antfu',

    ignores: [
      'pacts/**',
      'coverage/**',
      '.nuxt/**',
      '.output/**',
      'dist/**',
    ],

    formatters: true,
    vue: true,

    typescript: {
      tsconfigPath: 'tsconfig.json',
      // 🚨 删掉了引发冲突的 parserOptions 和 allowDefaultProject，不再走弯路！
    },

    rules: {
      'perfectionist/sort-imports': ['warn', { type: 'alphabetical' }],
      'vue/block-lang': ['error', { script: { lang: ['ts'] } }],
      'vue/enforce-style-attribute': ['error', { allow: ['scoped', 'module'] }],
    },
  }),
  {
    name: 'laslog/custom',
    rules: {
      'nuxt/prefer-import-meta': 'error',
    },
  },
  // 👉 针对测试配置文件，关闭过于严格的布尔值类型校验
  {
    files: ['vitest.config.ts'],
    rules: {
      'ts/strict-boolean-expressions': 'off',
    },
  },
)
